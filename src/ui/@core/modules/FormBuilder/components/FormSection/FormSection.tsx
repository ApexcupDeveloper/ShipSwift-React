import { HelpCircleIcon18 } from '../../../../../../assets/icons';
import { Tooltip } from '../../../Tooltip';

import * as styled from './FormSection.styled';

type Props = {
  title?       : string;
  topPadding?  : boolean;
  description? : string;
  showSplitter?: boolean;
  list?        : boolean;
};

export const FormSection: React.FC<Props> = ({
  title,
  children,
  description,
  topPadding   = false,
  showSplitter = false,
  list         = false,
}) => {
  return (
    <styled.BodyWrapper
      data-list={list}
      data-top-padding={topPadding}
      data-show-title={!!title}
      data-show-splitter={showSplitter}
    >
      {title && (
        <styled.TitleContainer>
          <styled.Title children={title} />
          {description && (
            <Tooltip content={description} align="center" position="top">
              <HelpCircleIcon18 />
            </Tooltip>
          )}
        </styled.TitleContainer>
      )}
      {children}
    </styled.BodyWrapper>
  );
};
