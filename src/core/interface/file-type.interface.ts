export interface FileType {
  files: File[];
  validateFiles(files: File[]): boolean;
  uploadFiles(): void;
}

export abstract class FileFactory {}

export class MyComponent implements FileType {
  files: File[];
  validateFiles(files: File[]): boolean {
    throw new Error('Method not implemented.');
  }
  uploadFiles(): void {
    throw new Error('Method not implemented.');
  }
}
