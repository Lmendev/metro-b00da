import Graph from "node-dijkstra"
import { Metro } from "../src/classes/Metro.js"
import { network } from "./data/network.js"

describe("Metro Class", () => {
    const metro = new Metro(network)
    metro.init()

    test("Should contain red and green train colors", () => {
        expect(metro.network.trainColors[0]).toBe("Rojo")
        expect(metro.network.trainColors[1]).toBe("Verde")
    })

    test("trainColors Should return network.trainColors + 'Sin color' option", () => {
        expect(metro.trainColors()[0]).toBe("Sin color")
        expect(metro.trainColors().length).toEqual(3)
    })

    test("Every trainPath.route should be an instance of Graph node-dijkstra", () => {
        metro.network.trainPaths.forEach(trainPath => {
            expect(trainPath.route).toBeInstanceOf(Graph)
        });
    })

    test("shortestPath from A to F with Rojo train should be A->B->C->H->F", () => {
        expect(metro.shortestPath({from: 'A', to: 'F', color: 'Rojo'})).toEqual(["A", "B", "C", "H", "F"])
    })

    test("shortestPath from A to I with Verde train should be A->B->C->G->I", () => {
        expect(metro.shortestPath({from: 'A', to: 'I', color: 'Verde'})).toEqual(["A", "B", "C", "G", "I"])
    })

    test("shortestPath from A to H with Verde train should be null", () => {
        expect(metro.shortestPath({from: 'A', to: 'H', color: 'Verde'})).toEqual(null)
    })
})