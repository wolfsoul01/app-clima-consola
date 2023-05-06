import fs from "fs";
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

class Busqueda {
  ruta = "./bd/historial.txt";
  historial = [];

  constructor() {
    // Leer DB si existe
  }

  addLugar(ciudad) {
    this.historial.push(ciudad);
  }

  get paramsMapBox() {
    return {
      limit: 5,
      access_token: process.env.MAPBOX_KEY,
      language: "es",
    };
  }

  get paramsOpeanWather(){
    return {
        appid:process.env.OPENWEATHER_KEY,
        lang:'es'
    }
  }
  async buscarCiudad(lugar = "") {
    // peticion http
    try {
      const axi = axios.create({
        baseURL: ` https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.paramsMapBox,
      });

      const { data } = await axi.get(); // los lugares
      const ciudades = data.features.map((lugar) => {
        return {
            id:lugar.id,
            name:lugar.place_name,
            log:lugar.center[0],
            lat:lugar.center[1]
        };
      });
      return ciudades;

    } catch (error) {
        console.log(error);
    }
  }

  async buscarClima(lat,lon){
    try {
        const axi =axios.create({
            baseURLhttps:'//api.openweathermap.org/data/2.5/weather',
            params:{...this.paramsOpeanWather,lat,lon}
        })
        
       const dataClima= await axi.get();
    } catch (error) {
        
    }
  }

  guardarBD() {
    fs.writeFileSync(this.ruta, JSON.stringify(this.historial));
  }

  leerBD() {
    if (fs.existsSync(this.ruta)) {
      const data = fs.readFileSync(this.ruta);

      return data.length === 0 ? [] : data;
    }
  }
}

export default Busqueda;
