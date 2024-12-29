import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "La base de la tabla de multiplicación",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "El limite de la tabla de multiplicacion",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: "false",
    describe: "Imprimir en consola la tabla de multiplicación",
  })
  .option("n",{
    alias:"name",
    type:"string",
    default:"multiplication-table",
    describe:"File name"
  })
  .option('d',{
    alias:"destination",
    type:"string",
    default:"/outputs",
    describe:"File destination"
  })
  .check((argv, options) => {
    if (argv.b < 1) {
      throw `La base no puede ser menor a 1`;
    }
    return true;
  })
  .check((argv, options) => {
    if (argv.l < 1) {
      throw "La base no puede ser menos a 1";
    }
    return true;
  })
  .parseSync();
