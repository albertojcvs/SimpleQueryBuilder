import { IExecutable } from "../../common/executable";
import { ISelectBuilder } from "../select/select";

export class SelectBuilder implements ISelectBuilder, IExecutable<string> {
  private value: string;
  private table: string;
  constructor(table: string, params?: string[]) {
    this.value = "";
    this.table = table;
    this.select(params);
  }

  private select(params?: string[]): void {
    const values = params ? params.join(", ") : "*";
    this.value += `SELECT ${values} FROM ${this.table}`;
  }

  join(): void {
    throw new Error("Not Implemented");
  }

  public exec(): string {
    this.value += ";";
    console.log(this.value);
    return this.value;
  }
}
