import { IExecutable } from "../../common/executable";
import { IInsertBuilder } from "./insert";

export class InsertBuilder implements IInsertBuilder, IExecutable<string> {
  private value: string;
  private table: string;

  constructor(table: string, values: Record<string, any>[]) {
    this.table = table;
    this.value = "";

    this.insert(values);
  }

  private insert(values: Record<string, any>[]) {
    this.value += `INSERT INTO ${this.table} VALUES`;

    for (let index in values) {
      const value = values[index];
      this.value += "(";

      this.value += Object.values(value as Object)
        .map((v) => String(v))
        .join(", ");

      if (+index !== values.length -1 ) this.value += ",";
    }

    this.value += ")";
  }

  exec(): string {
    this.value += ";";
    console.log(this.value);
    return this.value;
  }
}
