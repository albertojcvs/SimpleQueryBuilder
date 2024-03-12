import { InsertBuilder } from "./builders/insert/insertBuilder";
import { SelectBuilder } from "./builders/select/selectBuilder";

interface IQueryBuilder {
  select(params?: string[]): SelectBuilder;
  insert(values?: Record<string, any>[]): InsertBuilder;
  update(): any;
  delete(): any;
}

export class QueryBuilder implements IQueryBuilder {
  constructor(private table: string) {}

  select(params?: string[]): SelectBuilder {
    return new SelectBuilder(this.table, params);
  }

  insert(values: Record<string, any>[]): InsertBuilder {
    return new InsertBuilder(this.table, values);
  }

  update() {
    throw new Error("Method not implemented.");
  }
  delete() {
    throw new Error("Method not implemented.");
  }
}
