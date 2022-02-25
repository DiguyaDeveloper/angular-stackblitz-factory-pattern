import { FileExtensions } from './file';
import { FileEnum } from './file.enum';

export class FileFactoryReflection {
  static factory(type: FileEnum): FileExtensions {
    let instanceParameters: { extension: string; types: string[] };
    instanceParameters.extension = this.toExtensionName(type);
    instanceParameters.types = this.getTypes(type);

    return this.create(this.toClassName(type), instanceParameters);
  }

  static toClassName(value: FileEnum): string {
    return value.toString().charAt[0].toUpperCase;
  }

  static toExtensionName(value: FileEnum): string {
    return `.${value.toString().toLowerCase}`;
  }

  static create(
    type: string,
    instanceParameters: { extension: string; types: string[] }
  ) {
    const newInstance = Object.create(window[type].prototype);
    newInstance.constructor.apply(newInstance, instanceParameters);
    return newInstance;
  }

  static getTypes(value: FileEnum): string[] {
    const types = {
      CSV: ['text/csv', 'application/csv', 'application/vnd.ms-excel'],
      XLSX: [
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      ],
    };

    return types[value.toString()];
  }
}
