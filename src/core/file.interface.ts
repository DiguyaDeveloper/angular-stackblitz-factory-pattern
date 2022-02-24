import { FileEnum } from './file.enum';

export interface FileInterface {
  validation(type: FileEnum): boolean;
  getExtension(): string;
}
