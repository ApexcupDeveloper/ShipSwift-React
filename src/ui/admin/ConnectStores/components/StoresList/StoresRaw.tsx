import { useLocale } from '../../../../../assets/locale';

import { ItemRaw, ActiveStatusLabel, MoreMenu } from '../../../../@core/modules/ListBuilder';
import { AvatarLetter } from '../../../../@core/modules/Other';

type Props = {
  id: string;
  name: string;
  companyId: string;
  type: string;
  // country   : string;
  enabled: boolean;
  shortName: string;
  iconColour: string;
  onClick(): any;
  onDelete(): any;
  onEdit(): any;
};

export const StoresRaw: React.VFC<Props> = ({ name, type, enabled, shortName, iconColour, onClick, onDelete, onEdit }) => {
  const { word } = useLocale();
  return (
    <ItemRaw>
      <ItemRaw.Merge margin="0px -70px 0px 0px" flex={0.5}>
        <ItemRaw.Checkbox />
      </ItemRaw.Merge>
      <ItemRaw.Merge justify="center">
        <AvatarLetter name={shortName} backgroundColor={iconColour} type={type} size={34} />
      </ItemRaw.Merge>

      <ItemRaw.Title bold children={name} />
      <ItemRaw.Title children={type} />
      <ItemRaw.Title children={'country'} />
      <ItemRaw.Switch checked={enabled} onClick={onClick} />
      <ItemRaw.ActiveStatus label={enabled ? 'active' : 'inactive'} />
      <MoreMenu>
        <MoreMenu.Button children={word('global.edit')} onClick={onEdit}/>
        <MoreMenu.Button children={word('global.delete')} onClick={onDelete} />
      </MoreMenu>
    </ItemRaw>
  );
};
