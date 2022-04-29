import React, { useMemo } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { DisplayRound } from '../../../../@core/modules/Other';

import * as styled from './WelcomeStep.styled';

export type WelcomeStepProps = {
	icon       : React.ReactNode;
	title      : string;
	description: string;
	step       : number;
};

export const WelcomeStep: React.VFC<WelcomeStepProps> = ({ icon, title, description, step }) => {
	const { word } = useLocale();
	const stepFormatted = useMemo(() => word('global.step') + ` ${step}`, [word, step]);

  return (
    <DisplayRound>
      <styled.BodyWrapper>
				{icon}
				<styled.TitleContainer>
					<styled.Title children={title}/>
					<styled.Description children={description}/>
				</styled.TitleContainer>
				<styled.Step children={stepFormatted}/>
			</styled.BodyWrapper>
    </DisplayRound>
  );
};
