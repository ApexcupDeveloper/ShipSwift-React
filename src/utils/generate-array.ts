export const generateArray = <T>(length: number, push: (index: number) => T) => {
  const array: T[] = [];

  for (let i = 0; i < length; i++) {
    array.push(push(i));
  }

  return array;
};
