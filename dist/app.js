"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const Multiplicar = (num) => {
    console.clear();
    const titulo = `\n
        ==========================================
            Tabla de multiplicar del ${num}
        ==========================================
        \n`;
    let data = "";
    for (let i = 1; i <= 10; i++) {
        data += `${num} x ${i} = ${i * num}\n`;
    }
    const msjTotal = titulo + data;
    console.log(msjTotal);
    const ruta = "outputs";
    fs_1.default.mkdirSync(ruta, { recursive: true });
    fs_1.default.writeFileSync(`${ruta}/tabla-del-${num}.txt`, msjTotal);
};
Multiplicar(11);
