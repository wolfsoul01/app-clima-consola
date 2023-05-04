import inquire from "inquirer";
import "colors";

/* Aqui van los menus de inquire para interactuar */

//Menu principal
const inquireMenu = async () => {
  const preguntas = [
    {
      type: "list",
      name: "opcion",
      message: "¿Qué desea hacer?",
      choices: [
        {
          value: 1,
          name: `${"1.".green} Buscar Ciudad `,
        },
        {
          value: 2,
          name: `${"2.".green} Historial`,
        },
        {
          value: 0,
          name: `${"0.".green} Salir`,
        },
      ],
    },
  ];
  console.clear();
  console.log("==========================".green);
  console.log("  Seleccione una opción".white);
  console.log("==========================\n".green);

  const { opcion } = await inquire.prompt(preguntas);

  return opcion;
};

export { inquireMenu };