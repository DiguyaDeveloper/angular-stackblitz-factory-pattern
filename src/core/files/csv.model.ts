import { FileExtensions } from '../file';
import { FileAbstract } from '../file.abstract';

export class Csv extends FileAbstract implements FileExtensions {
  extension: string;
  types: string[];

  constructor(extension: string, types: string[]) {
    super();
    this.extension = extension;
    this.types = types;
  }

  getExtension(): string {
    return this.extension;
  }

  getTypes(): string[] {
    return this.types;
  }

  validation(type: string): boolean {
    return super.validation(type, this.types);
  }
}
