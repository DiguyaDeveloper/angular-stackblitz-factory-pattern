import { FileExtensions } from './file';
import { FileEnum } from './file.enum';
import { Csv } from './files/csv.model';
import { Doc } from './files/doc.model';
import { Docx } from './files/docx.model';
import { Jpg } from './files/jpg.model';
import { Pdf } from './files/pdf.model';
import { Png } from './files/png.model';
import { Ppt } from './files/ppt.model';
import { Pptx } from './files/pptx.model';
import { Xlsx } from './files/xlsx.model';

export class FileFactory {
  static factory(type: FileEnum): FileExtensions {
    switch (type) {
      case FileEnum.CSV:
        return new Csv('.csv', [
          'text/csv',
          'application/csv',
          'application/vnd.ms-excel',
        ]);
      case FileEnum.XLSX:
        return new Xlsx('.xlsx', [
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ]);
      case FileEnum.JPG:
        return new Jpg('.jpg', ['image/jpeg']);
      case FileEnum.PNG:
        return new Png('.png', ['image/png']);
      case FileEnum.PDF:
        return new Pdf('.pdf', ['application/pdf']);
      case FileEnum.DOC:
        return new Doc('.doc', ['application/msword']);
      case FileEnum.DOCX:
        return new Docx('.docx', [
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ]);
      case FileEnum.PPT:
        return new Ppt('.ppt', ['application/vnd.ms-powerpoint']);
      case FileEnum.PPTX:
        return new Pptx('.pptx', [
          'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        ]);
      default:
        throw new Error('Error to load instance');
    }
  }
}
