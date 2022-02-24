export interface FileExtensions {
  extension: string;
  types: string[];
  getTypes(): string[];
  getExtension(): string;
}
