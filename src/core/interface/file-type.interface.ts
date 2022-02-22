export class File {
  static readonly CSV = new File('.csv', [
    'text/csv',
    'application/csv',
    'application/vnd.ms-excel',
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
