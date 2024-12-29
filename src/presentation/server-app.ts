import { CreateRuta } from "../domain/use-cases/create-ruta";
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
    const dataTable = new CreateRuta().execute({
      data: table,
      ruta: `outputs/tabla del ${base}`,
    });
    dataTable ? console.log("Data creada") : console.log("Ups, salio un error");
  }
}
