import fs from "fs";

interface Options {
  data: string;
  ruta?: string;
  name?: string;
}
interface CreateRutaUseCase {
  execute: (options: Options) => boolean;
}

export class CreateRuta implements CreateRutaUseCase {
  constructor() {}

  execute({ data, ruta = "outputs", name="table.txt" }: Options) {
    try {
      fs.mkdirSync(ruta, { recursive: true });
      fs.writeFileSync(`${ruta}/${name}`, data);
      return true;
    } catch (error) {
      console.error({ error });
      return false;
    }
  }
}
