import { FileExtensions } from '../file';
import { FileAbstract } from '../file.abstract';

export class Jpg extends FileAbstract implements FileExtensions {
  constructor(extension: string, types: string[]) {
    super(extension, types);
  }
}
