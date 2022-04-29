import { FileFormat } from "../../../../../constants/file";

export const fileSizeRule = 2;
export const formatRule: string[] = [...FileFormat.Image.Jpg, ...FileFormat.Image.Png];
export const formatText = formatRule.join(', ');
