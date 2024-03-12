import { QueryBuilder } from "./src/queryBuilder";

// new QueryBuilder("users").select().exec();

new QueryBuilder("test").insert([{ a: 1, b: 2 }]).exec();
