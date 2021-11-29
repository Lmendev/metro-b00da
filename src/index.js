import { App } from "./classes/App.js"
import { Metro } from "./classes/Metro.js"
import { network } from "./data/network.js"

const metro = new Metro(network)
const app = new App(metro)

app.init()