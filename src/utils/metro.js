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
            if (!station.adjacentStations.filter(s => s.name === stationToDelete.name).length)
                return station

            let adjacentStationsWithoutStationToDelete = station.adjacentStations.filter(s => s.name !== stationToDelete.name)
            let newAdjacentStations                    = stationToDelete.adjacentStations.filter(s => s.name !== station.name)

            let weightFromStationToStationToDelete = station.adjacentStations.filter(s => s.name === stationToDelete.name)[0].weight

            newAdjacentStations = newAdjacentStations.map(s => { return { ...s, weight: s.weight +  weightFromStationToStationToDelete } })

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

        station.adjacentStations.forEach(s => {
            let time = stations.filter(station => station.name === s.name)[0].time || 0
            let totalCost = s.weight + time

            map.set(s.name, totalCost)
        })
        
        graph.set(station.name, map)
    })

    return new Graph(graph)
}