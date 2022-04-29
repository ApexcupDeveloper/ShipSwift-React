import { createContext, useContext } from 'react';
import { useState } from 'react';
import { SelectType } from '../Select/Select.config';

const _useShowedItemFilter = () => {
  const [showed, setShowed] = useState<SelectType | 'filterButton' | undefined>();
  return {
    showed,
    setShowed,
  };
};

type Props = {};

export const ShowedItemFilterProvider: React.FC<Props> = ({ children }) => {
  return <ShowedItemFilterContext.Provider value={_useShowedItemFilter()}>{children}</ShowedItemFilterContext.Provider>;
};

  type context = ReturnType<typeof _useShowedItemFilter>;
const ShowedItemFilterContext =  createContext({} as context);

export const useShowedItemFilter = () => useContext(ShowedItemFilterContext);
