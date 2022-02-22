export class FileTypes {
  static readonly CSV = new FileTypes('.csv', [
    'text/csv',
    'application/csv',
    'application/vnd.ms-excel',
  ]);
  static readonly XLSX = new FileTypes('.xlsx', [
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ]);
  static readonly JPG = new FileTypes('.jpg', ['image/jpeg']);
  static readonly PNG = new FileTypes('.png', ['image/png']);
  static readonly PDF = new FileTypes('.pdf', ['application/pdf']);
  static readonly DOC = new FileTypes('.doc', ['application/msword']);
  static readonly DOCX = new FileTypes('.docx', [
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ]);
  static readonly PPT = new FileTypes('.ppt', [
    'application/vnd.ms-powerpoint',
  ]);
  static readonly PPTX = new FileTypes('.pptx', [
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  ]);

  private constructor(
    private readonly key: string,
    private readonly type: string[]
  ) {}
}

interface Product {
  operation(type: string, extension: string[]): string;
}

export abstract class CreatorFile {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();

    return product.operation('.csv', [
      'text/csv',
      'application/csv',
      'application/vnd.ms-excel',
    ]);
  }
}

class ConcreteCreator extends CreatorFile {
  public factoryMethod(): Product {
    return new ConcreteProduct();
  }
}

class ConcreteProduct implements Product {
  public operation(): string {
    return '{Result of the ConcreteProduct1}';
  }
}
