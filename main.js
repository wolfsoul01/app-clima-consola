import "colors";
import { inquireMenu, pausa } from "./helpres/inquireMenu.js";
import Busqueda from "./models/Busqueda.js";

const main = async () => {
  let opt;
  const busqueda = new Busqueda();

  do {
    opt = await inquireMenu();
    console.log(opt);


    switch (opt) {
      case 1:
        // mostrar mensaje 

        //Buscar los lugar 

        //MOstrar los lugares que coicidan 

        //Selecionar el lugar 

        //clima 

        //Mostar resultados 
        break;

      case 2:
        break;
    }

    if (opt !== 0) await pausa();

  } while (opt !== 0);
};

main();
