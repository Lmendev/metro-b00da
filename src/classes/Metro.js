import { generateTrainPaths } from "../utils/metro.js"

export class Metro {
    constructor(network) {
        this.network = network
    }

    init = () => {
        this.network.trainPaths = generateTrainPaths(this.network)
    }
    
    stations = () => this.network.stations.map(station => station.name)
    
    trainColors = () => [ "Sin color", ...this.network.trainColors ]

    shortestPath = ({from, to, color}) => {
        let trainPath = this.network.trainPaths.filter(trainPath => trainPath.color === color)[0]
        
        return trainPath.route.path(from, to)
    }
}