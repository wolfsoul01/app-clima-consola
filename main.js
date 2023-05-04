import "colors";
import { inquireMenu,pausa } from "./helpres/inquireMenu.js";

const main = async () => {
  let opt;

  do {
    opt = await inquireMenu();
    console.log(opt);
    switch (opt) {
      case 1:
        break;

      case 2:
        break;
    }
    
     if(opt !== 0) await pausa();
    
  } while (opt !== 0);
};

main();
