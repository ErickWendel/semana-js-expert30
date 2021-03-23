/*
node index.js \
    --username erickwendel \
    --room sala01 \
    --hostUri localhost
*/


import Events from 'events'
import CliConfig from './src/cliConfig.js';
import SocketClient from './src/socker.js';
import TerminalController from "./src/terminalController.js";


const [nodePath, filePath, ...commands] = process.argv
const config = CliConfig.parseArguments(commands)

const componentEmitter = new Events()
const socketClient = new SocketClient(config)
await socketClient.initialize()

// const controller = new TerminalController()
// await controller.initializeTable(componentEmitter)

