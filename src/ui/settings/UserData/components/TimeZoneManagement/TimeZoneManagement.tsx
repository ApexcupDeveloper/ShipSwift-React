import { useLocale } from '../../../../../assets/locale';
import { FormCaption } from '../../../../@core/modules/Container';
import { Select } from '../../../../@core/modules/Select';

import { Title } from '../../views/UserDataView/UserDataView.styled';
import * as styled from './TimeZoneManagement.styled';
import { selectOptions } from './TimeZoneManagement.config';
import { timezones } from '../../../../../utils';
import { useState } from 'react';

type Props = {};

export const TimeZoneManagement: React.FC<Props> = ({ children }) => {
	const { word } = useLocale();
	const selectObject = selectOptions(word);
	const [selectedTimezone, setSelectedTimezone] = useState([timezones[0]]);

	return (
		<styled.BodyWrapper>
			<Title>{word('global.time.zone.management')}</Title>
			<FormCaption caption={word('global.choose.the.time.zone.where.you.are.located')}>
				<Select values={timezones} selectedValues={selectedTimezone} width={342} onSelectedChanged={setSelectedTimezone} />
			</FormCaption>
		</styled.BodyWrapper>
	);
};
