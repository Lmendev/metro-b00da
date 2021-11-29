import inquirer from "inquirer"

export const trainMenu = async (metro) => 
    inquirer.prompt([
        {
            type: 'list',
            name: 'from',
            message: '🚉 Seleccione estación inicial',
            choices: metro.stations(),
            loop: false
        },
        {
            type: 'list',
            name: 'to',
            message: '🚉 Seleccione estación final',
            choices: metro.stations(),
            loop: false
        },
        {
            type: 'list',
            name: 'color',
            message: '🚉 Seleccione color de tren',
            choices: metro.trainColors(),
            loop: false
        },
    ])

export const optionsMenu = async () =>   
    inquirer.prompt([
        {
            type: 'list',
            name: 'opt',
            message: '¿Continuar?',
            choices: ["Nueva búsqueda", "Salir"],
            loop: false
        }])