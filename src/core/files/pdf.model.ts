import { FileExtensions } from '../file';
import { FileAbstract } from '../file.abstract';

export class Pdf extends FileAbstract implements FileExtensions {
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

  validation(type: string): boolean {
    return super.validation(type, this.types);
  }
}
