import { SelectBuilder } from "./builders/select/selectBuilder";

export class QueryBuilder {
    constructor(private table: string) {}
  
    select(params?: string[]): SelectBuilder {
      return new SelectBuilder(this.table, params);
    }
  }