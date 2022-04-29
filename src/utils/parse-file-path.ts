export const parseFilePath = (file: File) => {
  return new Promise<string>((res, rej) => {
    const reader = new FileReader()
    reader.onload = () => res(reader.result as string);
    reader.onerror = rej;
    reader.readAsDataURL(file);
  });
};
