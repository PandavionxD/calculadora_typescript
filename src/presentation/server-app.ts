import { CreateRuta } from "../domain/use-cases/create-ruta";
import { CreateTable } from "../domain/use-cases/create-table";

export interface runOptions {
  base: number;
  limit: number;
  showTable: boolean;
  destination: string;
  name: string;
}

export class ServerApp {
  static run({ base, limit, showTable, name, destination }: runOptions) {
    console.clear();
    console.log("server run!!!");
    console.log({ base, limit, showTable });
    const table = new CreateTable().execute({ base, limit });
    if (showTable) console.log({ table });
    const dataTable = new CreateRuta().execute({
      data: table,
      ruta: `${destination}/${name} - ${base}`,
    });
    dataTable ? console.log("Data creada") : console.log("Ups, salio un error");
  }
}
