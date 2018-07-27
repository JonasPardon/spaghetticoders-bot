module.exports = async client => {
    console.log(`[READY] ${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`);

    if(client.config.dev === true) client.user.setStatus('offline');
    client.user.setActivity(`${client.config.prefix}help`, {type: "PLAYING"});

    client.settings = {};

    client.loadReactionsChannel();
}