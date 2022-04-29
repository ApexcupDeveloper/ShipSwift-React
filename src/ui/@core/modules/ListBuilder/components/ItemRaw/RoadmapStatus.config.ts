import { WordFunc } from '../../../../../../assets/locale';

export type Label =
  | 'critical'
  | 'important'
  | 'nice-to-have';

export type LabelInfo = {
  label: string;
  color: string;
  background: string;
};

export const getLabelInfo = (label: Label, word: WordFunc): LabelInfo | undefined => {
  switch (label) {
    case 'critical':
      return {
        background: '#9CA2B3',
        color: '#FFFFFF',
        label: word('support.roadmap.critical'),
      };

    case 'important':
      return {
        background: '#BCC1D0',
        color: '#FFFFFF',
        label: word('support.roadmap.important'),
      };

    case 'nice-to-have':
      return {
        background: '#CFD4E2',
        color: '#FFFFFF',
        label: word('support.roadmap.nice-to-have'),
      };
  }
};
