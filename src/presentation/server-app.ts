import { CreateTable } from "../domain/use-cases/create-table";

export interface runOptions {
  base: number;
  limit: number;
  showTable: boolean;
}

export class ServerApp {
  static run({ base, limit, showTable }: runOptions) {
    console.clear();
    console.log("server run!!!");
    console.log({ base, limit, showTable });
    const table = new CreateTable().execute({ base, limit });
    if (showTable) console.log({ table });
  }
}
