import { useLocale } from '../../../../../assets/locale';
import * as styled from './ShipSwiftSection.styled';
import { Title } from '../../views/UserDataView/UserDataView.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setAuto, setFrom, setTo, switchTheme } from '../../../../redux/action';
import DarkModeToggle from "react-dark-mode-toggle";
import { Checkbox } from '../../../../@core/modules/Checkbox';
import { TimePicker } from '../../../../@core/modules/TimePicker';

type Props = {
	enableVerification: boolean;
};

export const ShipSwiftSection: React.FC<Props> = ({ enableVerification }) => {
	const { word } = useLocale();
	const dispatch = useDispatch();
	const isDark = useSelector((state: any) => state.theme.isDark);
	const fromTime = useSelector((state: any) => state.theme.from);
	const toTime = useSelector((state: any) => state.theme.to);
	const auto = useSelector((state: any) => state.theme.auto);

	const onChangeTheme = () => {
		dispatch(setAuto(false));
		dispatch(switchTheme(isDark ? false : true));
	}

	return (
		<styled.BodyWrapper>
			<Title>{word('global.shipswift.setting')}</Title>
			<styled.ThemeWrapper>
				<styled.ToogleWrapper>
					<styled.ThemeText>Light/Dark Mode</styled.ThemeText>
					<DarkModeToggle
						onChange={onChangeTheme}
						checked={isDark}
						size={70}
						className="switch-theme"
					/>
				</styled.ToogleWrapper>

				<styled.AutoWrapper>
					<styled.ThemeText>Auto</styled.ThemeText>
					<Checkbox
						checked={auto}
						onChange={() => { dispatch(setAuto(!auto)); }}
					/>
					{auto && (
						<styled.TimePickerWrapper>
							<styled.TimePickerDividen>
								<styled.ThemeText>From</styled.ThemeText>
								<TimePicker
									placeholder="HH:MM"
									value={fromTime}
									id="from-time"
									onChange={(e) => { dispatch(setFrom(e)); }}
								/>
							</styled.TimePickerDividen>
							<styled.TimePickerDividen>
								<styled.ThemeText>To</styled.ThemeText>
								<TimePicker
									placeholder="HH:MM"
									value={toTime}
									id="to-time"
									onChange={(e) => { dispatch(setTo(e)); }}
								/>
							</styled.TimePickerDividen>
						</styled.TimePickerWrapper>
					)}
				</styled.AutoWrapper>
			</styled.ThemeWrapper>
		</styled.BodyWrapper>
	);
};
