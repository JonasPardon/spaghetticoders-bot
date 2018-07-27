const Discord = require('discord.js');
const config = require('./config');

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} | servers: ${client.guilds.size} | users: ${client.users.size}`);
});

client.login(config.token);