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
    const keys = Array.from(
      new Set(values.map((value) => Object.keys(value)).flat())
    );
    const formattedKeys = "(" + keys.join(", ") + ")";
    this.value += `INSERT INTO ${this.table} ${formattedKeys}  VALUES `;
    for (let index in values) {
      this.value += "(";

      const value = values[index];
      let formattedValues = "";
      for (let keyIndex in keys) {
        const key = keys[keyIndex];
        this.value += value[key] || "NULL";

        if (+keyIndex !== keys.length - 1) this.value += ", ";
        this.value += formattedValues;
      }

      this.value += ")";
      if (+index !== values.length - 1) this.value += ", ";
    }

  }

  exec(): string {
    this.value += ";";
    console.log(this.value);
    return this.value;
  }
}

const a = [].reduce((keys) => keys, [] as string[]);
