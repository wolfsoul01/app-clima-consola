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
        break;

      case 2:
        break;
    }

    if (opt !== 0) await pausa();

  } while (opt !== 0);
};

main();
