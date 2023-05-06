import "colors";
import {
  ciudadesMenu,
  inquireMenu,
  leerInput,
  pausa,
} from "./helpres/inquireMenu.js";
import Busqueda from "./models/Busqueda.js";

const main = async () => {
  let opt;
  const busqueda = new Busqueda();

  // const data=busqueda.leerBD();

  /* data.forEach(e=>{
    busqueda.addLugar(e)
  }) */
  do {
    opt = await inquireMenu();

    switch (opt) {
      case 1:
        // mostrar mensaje
        const { lugar } = await leerInput("Que ciudad desea Buscar: ");
        busqueda.addLugar(lugar);
        //Buscar los lugar
        const data = await busqueda.buscarCiudad(lugar);

        const {name,lat,log} = await ciudadesMenu(data);

        //MOstrar los lugares que coicidan

        //Selecionar el lugar

        //clima

        //Mostar resultados
        console.log('\n Informacion de la Ciudad'.blue);
        console.log('');
        console.log(`Ciudad: ${name}`);
        console.log(`Lat: ${lat} `);
        console.log(`Log: ${log}`);
        console.log(`Clima: `);
        console.log(`Temp: `);
        console.log(`Temp-Max: `);
        console.log(`Temp-Min: `);
        // busqueda.guardarBD();
        break;

      case 2:
        busqueda.historial.forEach((e) => console.log(e));
        break;
    }

    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
