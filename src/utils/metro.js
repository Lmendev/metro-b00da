import Graph from "node-dijkstra"

export const generateTrainPaths = network => {
    let { stations } = network

    let trainPaths = [{ color: "Sin color", stations, route: generateGraph(stations) }]

    network.trainColors.forEach(color => {
        
        let trainPath = generateTrainPath(stations, color)

        trainPaths.push(trainPath)
    })

    return trainPaths
}

const generateTrainPath = (stations, color) => {
    let stationsToDelete = stations.filter(station => station.color && station.color !== color)
    stations             = stations.filter(station => !station.color || station.color === color)

    stationsToDelete.forEach(stationToDelete => {
        stations = stations.map(station => {
            if (!station.adjacentStations.includes(stationToDelete.name))
                return station

            let adjacentStationsWithoutStationToDelete = station.adjacentStations.filter(name => name !== stationToDelete.name)
            let newAdjacentStations                    = stationToDelete.adjacentStations.filter(name => name !== station.name)

            let adjacentStations = [ ...adjacentStationsWithoutStationToDelete , ...newAdjacentStations ] 

            return { ...station, adjacentStations } 
        })
    })

    let route = generateGraph(stations) //Graph for dijkstra
    
    return { stations, color, route }
}

const generateGraph = stations => {
    const graph = new Map()
        
    stations.forEach(station => {
        let map = new Map()

        station.adjacentStations.forEach(stationName => {
            map.set(stationName, 1)
        })
        
        graph.set(station.name, map)
    })

    return new Graph(graph)
}