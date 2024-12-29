import { yarg } from "./config/yargs.plugin";
import { ServerApp } from './presentation/server-app';


(() => {
  main();
})();

function main() {
  const {b:base,l:limit,s:showTable} = yarg;
  ServerApp.run({base, limit, showTable:true});
}
