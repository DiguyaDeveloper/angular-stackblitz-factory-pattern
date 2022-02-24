export abstract class FileAbstract {
  extension: string;
  types: string[];

  constructor(extension: string, types: string[]) {
    this.extension = extension;
    this.types = types;
  }

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
