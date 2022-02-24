export abstract class FileAbstract {
  validation(type: string, types: string[]): boolean {
    return (
      types.filter((ext: string) => {
        return ext === type;
      }).length > 0
    );
  }
}
