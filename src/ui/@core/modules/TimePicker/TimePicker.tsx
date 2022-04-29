import { Slider as SliderAntd } from 'antd';
import { useEffect, useCallback, useState } from 'react';
import { ArrowDownIconSmall16, ArrowUpIcon } from '../../../../assets/icons';
import { ChangeEventHandler } from '../../hooks/useInputState';

import * as styled from './TimePicker.styled';

export type TooltipPosition = 'top' | 'bottom';

type TimeProps = 'HH' | 'MM';
type AmPmProps = 'AM' | 'PM';

type Props = {
  placeholder: string,
  value: string,
  id?: string,
  onChange: (time: string) => void;
};

export const TimePicker: React.FC<Props> = ({
  placeholder,
  value,
  onChange,
  id = "TimePicker-Modal"
}) => {
  const [ampm, setAmpm] = useState<AmPmProps>('AM');
  const [showModal, setShowModal] = useState(false);
  const [hh, setHH] = useState('00');
  const [mm, setMM] = useState('00');
  const [time, setTime] = useState(value || '');

  useEffect(() => {
    document.addEventListener("click", (evt) => {
      const flyoutElement = document.getElementById(id);
      let targetElement: any = evt.target;

      do {
        if (targetElement == flyoutElement) {
          return;
        }
        targetElement = targetElement.parentNode;
      } while (targetElement);

      setShowModal(false);
    });
  }, [])

  useEffect(() => {
    if(time) {
      const changedTime = time.split(':');
      setHH(changedTime[0]);
      setMM(changedTime[1]);
      if(Number(changedTime[0]) < 12) {
        setAmpm('AM');
      } else {
        setAmpm('PM');
      }
    }
  }, [time])

  const onShowModal = () => {
    setShowModal(prev => !prev);
  }

  const upTime = (type: TimeProps) => {
    if (type === 'HH') {
      let hour = Number(hh);
      if (hour === 23) {
        hour = 0;
      } else {
        hour++;
      }
      setHH(('0' + hour).slice(-2));
      setTime(('0' + hour).slice(-2) + ':' + mm);
      onChange(('0' + hour).slice(-2) + ':' + mm);
    } else {
      let minute = Number(mm);
      if (minute === 59) {
        minute = 0;
      } else {
        minute++;
      }
      setMM(('0' + minute).slice(-2));
      setTime(hh + ':' + ('0' + minute).slice(-2));
      onChange(hh + ':' + ('0' + minute).slice(-2));
    }
  }

  const downTime = (type: TimeProps) => {
    if (type === 'HH') {
      let hour = Number(hh);
      if (hour === 0) {
        hour = 23;
      } else {
        hour--;
      }
      setHH(('0' + hour).slice(-2));
      setTime(('0' + hour).slice(-2) + ':' + mm);
      onChange(('0' + hour).slice(-2) + ':' + mm);
    } else {
      let minute = Number(mm);
      if (minute === 0) {
        minute = 59;
      } else {
        minute--;
      }
      setMM(('0' + minute).slice(-2));
      setTime(hh + ':' + ('0' + minute).slice(-2));
      onChange(hh + ':' + ('0' + minute).slice(-2));
    }
  }

  const onChangeAmPm = (e: AmPmProps) => {
    let convHour  = 0;
    if(e === 'AM' && Number(hh) > 11) {
      convHour = Number(hh) - 12;
      setHH(('0' + convHour).slice(-2));
    }
    
    if(e === 'PM' && Number(hh) < 12) {
      convHour = Number(hh) + 12;
      setHH(('0' + convHour).slice(-2));
    }
    setTime(('0' + convHour).slice(-2) + ':' + mm);
    onChange(('0' + convHour).slice(-2) + ':' + mm);
  }

  const onChangeHour = (e: any) => {
    const value = e.target.value;
    if (Number(value) > 23) {
      setHH('23');
    } else if (Number(value) < 0) {
      setHH('00');
    } else {
      setHH(('0' + value).slice(-2))
    }

    setTime(('0' + value).slice(-2) + ':' + mm);
    onChange(('0' + value).slice(-2) + ':' + mm);
  }

  const onChangeMinute = (e: any) => {
    const value = e.target.value;
    if (Number(value) > 59) {
      setMM('59');
    } else if (Number(value) < 0) {
      setMM('00');
    } else {
      setMM(('0' + value).slice(-2))
    }
    setTime(hh + ':' + ('0' + value).slice(-2));
    onChange(hh + ':' + ('0' + value).slice(-2));
  }

  return (
    <styled.BodyWrapper id={id}>
      <styled.TimeContainer onClick={onShowModal}>
        <styled.TimeWrapper>{time ? time + ' ' + ampm : placeholder}</styled.TimeWrapper>
        <styled.IconWrapper>
          {showModal ? (<ArrowUpIcon />) : (<ArrowDownIconSmall16 />)}
        </styled.IconWrapper>
      </styled.TimeContainer>
      {showModal && (
        <styled.TimeDropdownContainer>
          <styled.TimeDropdownWrapper>
            <styled.TimeInputWrapper>
              <styled.ArrowUp onClick={() => upTime('HH')} />
              <styled.TimeInput value={hh} maxLength={2} min={0} max={12} type="number" onChange={onChangeHour} />
              <styled.ArrowDown onClick={() => downTime('HH')} />
            </styled.TimeInputWrapper>
            <styled.Dividen>:</styled.Dividen>
            <styled.TimeInputWrapper>
              <styled.ArrowUp onClick={() => upTime('MM')} />
              <styled.TimeInput value={mm} maxLength={2} min={0} max={59} type="number" onChange={onChangeMinute} />
              <styled.ArrowDown onClick={() => downTime('MM')} />
            </styled.TimeInputWrapper>
          </styled.TimeDropdownWrapper>
          <styled.Divider />
          <styled.AmPmWrapper>
            <styled.AmButton ampm={ampm === 'AM'} onClick={() => onChangeAmPm('AM')}>AM</styled.AmButton>
            <styled.PmButton ampm={ampm === 'PM'} onClick={() => onChangeAmPm('PM')}>PM</styled.PmButton>
          </styled.AmPmWrapper>
        </styled.TimeDropdownContainer>
      )}
    </styled.BodyWrapper>
  );
};
