import { DatePickerProvider } from '../providers/DatePickerProvider';
import { DatePickerView } from '../views/DatePickerView';

type Props = React.ComponentProps<typeof DatePickerView> & React.ComponentProps<typeof DatePickerProvider>;

export const DatePicker: React.VFC<Props> = ({ dropdown, clearable, ...providerProps }) => {
  return (
    <DatePickerProvider {...providerProps}>
      <DatePickerView {...{ dropdown, clearable }} />
    </DatePickerProvider>
  );
};
