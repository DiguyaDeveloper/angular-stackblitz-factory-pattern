export interface FileType {
  files: File[];
  validateFiles(files: File[]): boolean;
  uploadFiles(): void;
}

export class MyComponent implements FileType {
  files: File[];
  validateFiles(files: File[]): boolean {
    throw new Error('Method not implemented.');
  }
  uploadFiles(): void {
    throw new Error('Method not implemented.');
  }
}
