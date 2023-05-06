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

const pausa = async () => {
  const preguntas = [
    {
      type: "input",
      name: "opt",
      message: `Presione ${`ENTER`.red} para continuar `,
    },
  ];
  console.log("\n");
  await inquire.prompt(preguntas);
};

const leerInput = async (messg) => {
  const pregunta = [
    {
      type: "input",
      name: "lugar",
      message: messg,
      validate: (opt = "") => {
        return opt.length === 0 ? "Estta vacio " : true;
      },
    },
  ];

  return await inquire.prompt(pregunta);
};

const ciudadesMenu = async (ciudadesArr) => {
  const choices = ciudadesArr.map((e) => {
    return { value: e, name: e };
  });
  const listaCiudades = [
    {
      type: "list",
      name: "ciudad",
      choices,
    },
  ];
  const { ciudad } = await inquire.prompt(listaCiudades)
  return ciudad;
};
export { inquireMenu, pausa, leerInput, ciudadesMenu };
