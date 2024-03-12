import { QueryBuilder } from "./src/queryBuilder";

// new QueryBuilder("users").select().exec();

new QueryBuilder("test").insert([{ a: 1, b: 2 }, { b: 3, a: 2, c:'4' }]).exec();


