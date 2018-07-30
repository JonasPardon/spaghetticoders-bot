module.exports = {
    // * If true, only bot owners can call commands
    dev: true,

    token: '',

    prefix: '',

    database: {
        host: '',
        port: 3306,
        user: '',
        password: '',
        database: '',
        charset: 'utf8mb4_general_ci'
    },

    // * Array of user ID's
    owner: [],

    channels: {
        reactionRoles: 'channel ID'
    },

    roles: {
        reactionName: 'role ID'
    },

    embed: {
        footer: '',
        color: '#5691c8'
    },

    mdn: 'https://developer.mozilla.org/en-US/search?q={term}&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=canvas&topic=svg&topic=webgl&topic=mobile&topic=webdev&topic=http&topic=webext&topic=standards'
}