/**
 * Compares file size with limit.
 * @param limit MB
 */
export const isFileLimit = (file: File, limit: number) => {
  if (!file) return false;
  return file.size > limit * 1024 ** 2;
};
