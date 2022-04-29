/**
 * Compares file formats.
 * @param formats file formats: jpg, png etc. 
 */
export const isFileFormat = (file: File, formats: string[]) => {
  if (!file) return false;

  const extIndex = file.name.lastIndexOf('.') + 1;
  const ext = file.name.slice(extIndex);

  return formats.includes(ext);
};
