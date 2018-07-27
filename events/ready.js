module.exports = async client => {
    console.log(`[READY] ${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`);
  
    client.user.setActivity(`${client.config.prefix}help`, {type: "PLAYING"});

    client.settings = {};

    client.loadReactionsChannel();
};