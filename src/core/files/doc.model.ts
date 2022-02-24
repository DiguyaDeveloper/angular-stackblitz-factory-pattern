import { FileExtensions } from '../file';
import { FileAbstract } from '../file.abstract';

export class Doc extends FileAbstract implements FileExtensions {
  extension: string;
  types: string[];

  constructor(extension: string, types: string[]) {
    super();
    this.extension = extension;
    this.types = types;
  }

  getTypes(): string[] {
    return this.types;
  }

  getExtension(): string {
    return this.extension;
  }
}
