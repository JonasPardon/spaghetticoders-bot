const Discord = require('discord.js');
const config = require('./config');
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

/**
 * * Make our own client
 */

class SpaghettiClient extends Discord.Client {
    constructor() {
        super();
        this.config = config;

        this.init();
    }

    async init() {
        // * Require all modules
        require('./modules/reactionRoles')(this);

        // * Load all events from the event folder and bind them to the client
        const evtFiles = await readdir("./events/");
        console.log(`Loading a total of ${evtFiles.length} events.`);
        evtFiles.forEach(file => {
            const eventName = file.split(".")[0];
            const event = require(`./events/${file}`);
            client.on(eventName, event.bind(null, client));
            console.log(` - Loaded event '${eventName}'`);
        });
    }
}

const client = new SpaghettiClient();

client.login(config.token);