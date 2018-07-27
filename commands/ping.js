exports.run = async (client, msg, args) => {
    msg.channel.send('Pong!');
}

exports.help = {
    name: 'ping',
    description: 'Play some ping pong with the bot'
}