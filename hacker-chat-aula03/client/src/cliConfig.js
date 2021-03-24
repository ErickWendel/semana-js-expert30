export default class CliConfig {
    constructor({ username, hostUri, room }) {
        this.username = username
        this.room = room 

        const { hostname, port, protocol } = new URL(hostUri)

        this.host = hostname
        this.port = port
        this.protocol = protocol.replace(/\W/, '')
        
    }
    static parseArguments(commands) {
        const cmd = new Map()
        for(const key in commands) {

            const index = parseInt(key)
            const command = commands[key]

            const commandPreffix = '--'
            if(!command.includes(commandPreffix)) continue;
            
            cmd.set(
                command.replace(commandPreffix, ''),
                commands[index + 1]
            )
        }

        return new CliConfig(Object.fromEntries(cmd))
    }
}