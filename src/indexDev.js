import { App } from "./classes/App.js"
import { Metro } from "./classes/Metro.js"
import { network } from "./data/network.js"

const metro = new Metro(network)

metro.init()

console.log(metro.shortestPath({from: "C", to: "F", color: "Sin color"}))