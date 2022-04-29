export const isEmpty = (value: any, minKeys?: number) => {
  if (!value) return false;  
  return Object.entries(value).length === (minKeys ?? 0);
};
