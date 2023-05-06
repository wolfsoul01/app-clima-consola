import fs from "fs";
import axios from 'axios'
import { log } from "console";
const MAPBOX_KEY="pk.eyJ1Ijoia2xlcml0aCIsImEiOiJja2tvZHh4Y3YwMDhnMnBvY3ozbHUxdGJvIn0.3zptKSSxJrM5VmfjnkKMYA"
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

    const axi= axios.create({
        baseURL:` https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params:{
            limit:5,
            access_token:MAPBOX_KEY,
            language:'es',
        }
      })

      const {data}= await axi.get(); // los lugares
     
      
    const ciudades=data.features.map(e=>{
         return e.place_name
    }) 
    return ciudades;
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
