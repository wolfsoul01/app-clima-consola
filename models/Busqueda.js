import fs from 'fs';

class Busqueda{

    ruta='./bd/historial.json'
    historial=[];


    constructor(){

        // Leer DB si existe 
    }

    addLugar(ciudad){
        this.historial.push(ciudad);
    }

    async buscarCiudad(lugar=''){

        // peticion http

        console.log(lugar);


        return[]; // los lugares 
    }

    guardarBD(){

        fs.writeFileSync(this.ruta,JSON.stringify(this.historial));
    }


}

export default Busqueda