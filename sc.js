const Discord = require('discord.js');
const config = require('./config');
const {
    promisify
} = require("util");
const readdir = promisify(require("fs").readdir);

/**
 * * Make our own client
 */

class SpaghettiClient extends Discord.Client {
    constructor() {
        super();
        this.config = config;

        this.embed = () => {
            return new Discord.RichEmbed()
                .setColor(config.embed.color)
                .setTimestamp();
        } 

        this.init();
    }

    async init() {
        // * Require all modules
        require('./modules/roles')(this);
        require('./modules/helpers')(this);

        // * Load all commands from the commands folder
        this.commands = [];
        const cmdFiles = await readdir("./commands/");
        console.log(`Loading a total of ${cmdFiles.length} commands...`);
        cmdFiles.forEach(f => {
            if (!f.endsWith(".js")) return;
            this.loadCommand(f);
        });

        // * Load all events from the event folder and bind them to the client
        const evtFiles = await readdir("./events/");
        console.log(`Loading a total of ${evtFiles.length} events...`);
        evtFiles.forEach(f => {
            if(!f.endsWith(".js")) return;
            this.loadEvent(f);
        });

        this.login(this.config.token);
    }
}

const client = new SpaghettiClient();