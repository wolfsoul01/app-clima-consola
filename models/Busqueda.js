import fs from "fs";

class Busqueda {
  ruta = "./bd/historial.txt";
  historial = [];

  constructor() {
    // Leer DB si existe
  }

  addLugar(ciudad) {
    this.historial.push(ciudad);
  }

  async buscarCiudad(lugar = "") {
    // peticion http

    console.log(lugar);

    return []; // los lugares
  }

  guardarBD() {
    fs.writeFileSync(this.ruta, JSON.stringify(this.historial));
  }

  leerBD() {
    if (fs.existsSync(this.ruta)) {

       const data= fs.readFileSync(this.ruta)

      return (data.length===0)?[]:data;


    }
  }
}

export default Busqueda;
