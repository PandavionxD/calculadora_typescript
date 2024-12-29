import fs from "fs";

const Multiplicar = (num: number) => {
  console.clear();
  const titulo = `
        ========================================
            Tabla de multiplicar del ${num}
        ========================================
        \n`;
  let data = "";
  for (let i = 1; i <= 10; i++) {
    data += `${num} x ${i} = ${i * num}\n`;
  }
  const msjTotal = titulo + data;
  console.log(msjTotal);
  const ruta = "outputs"
  fs.mkdirSync(ruta, { recursive:true})
  fs.writeFileSync(`${ruta}/tabla-del-${num}.txt`,msjTotal)
};

Multiplicar(8);
