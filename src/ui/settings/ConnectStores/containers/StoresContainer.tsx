import { SelectPageProvider } from '../../../@core/modules/ListBuilder/providers';

export const StoresContainer: React.FC = ({ children }) => {
  return <SelectPageProvider>{children}</SelectPageProvider>;
};
