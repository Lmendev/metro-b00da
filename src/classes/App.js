import figlet from "figlet"
import { trainMenu, optionsMenu } from "../utils/console.js"

export class App {
    constructor(metro){
        this.metro = metro
    }

    init = () => {
        this.metro.init()

        this.main()
    }

    main = () => {
        figlet('Metro Buda.com', async (err, data) => {
            if (err) {
                console.log('Something went wrong...')
                console.dir(err)
                return
            }
            
            let options = ''
            
            do {
                console.clear()
                console.log(data);

                let answers = await trainMenu(this.metro)
    
                let { from, to, color } = answers
    
                let shortestPath = this.metro.shortestPath(answers)
    
                if (!shortestPath) 
                    console.log(`No es posible generar una ruta entre ${from} y ${to} para un tren ${color}`)
                else
                    console.log(`La ruta con menor cantidad de estaciones entre ${from} y ${to} para un tren ${color} es ${shortestPath.join('->')}`)
                
                options = await optionsMenu()
            } while(options.opt !== 'Salir')
        })
    }
}