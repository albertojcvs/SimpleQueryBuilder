interface SelectBuilder {
  join(): SelectBuilder;
}

interface Executable<T> {
  exec(): T;
}

class SelectBuilder implements SelectBuilder, Executable<string> {
  private value: string;
  private table: string;
  constructor(table: string, params?: string[]) {
    this.value = "";

    this.select(params);

    this.table = table;
  }

  private select(params?: string[]): void {
    const values = params ? params.join(", ") : "*";
    this.value += `SELECT ${values}  FROM ${this.table}`;
  }

  join(): SelectBuilder {
    throw new Error("Not Implemented");
  }

  public exec(): string {
    this.value += ";";
    console.log(this.value);
    return this.value;
  }
}

class QueryBuilder {
  constructor(private table: string) {}

  select(params?: string[]): SelectBuilder {
    return new SelectBuilder(this.table, params);
  }
}

const result = new QueryBuilder("users").select().exec();

console.log(result);
