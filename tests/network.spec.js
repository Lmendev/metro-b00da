import { network } from "../src/data/network.js"

describe("Network data", () => {

    test("trainColors propertie should be defined", () => {
        expect(network.trainColors).toBeDefined()
    })

    test("trainColors should be an array of strings", () => {
        network.trainColors.forEach(color => {
            expect(typeof color).toBe('string')
        })
    })

    test("stations propertie should be defined", () => {
        expect(network.stations).toBeDefined()
    })

    test("stations propertie should be an array of objects", () => {
        network.stations.forEach(station => {
            expect(typeof station).toBe('object')
        })
    })

    test("Every station should have name and adjacentStations", () => {
        network.stations.forEach(station => {
            expect(station.name).toBeDefined()
            expect(typeof station.name).toBe('string')

            expect(station.adjacentStations).toBeDefined()
            expect(station.adjacentStations).toBeInstanceOf(Array)
            expect(station.adjacentStations.length).toBeGreaterThan(0)
        })
    })
})