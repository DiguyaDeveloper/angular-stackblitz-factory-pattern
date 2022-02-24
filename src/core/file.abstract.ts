export abstract class FileAbstract {
  extension: string;
  types: string[];

  constructor(extension: string, types: string[]) {
    this.extension = extension;
    this.types = types;
  }

  /**
   * Check type upload file is valid extension
   * Check size file is valid extension
   * @param type: string
   * @returns boolean
   */
  validation(type: string): boolean {
    return (
      this.types.filter((ext: string) => {
        return ext === type;
      }).length > 0
    );
  }

  getTypes(): string[] {
    return this.types;
  }

  getExtension(): string {
    return this.extension;
  }
}
