module.exports = async client => {

    client.giveRoleFromReaction = async (user, reactionName) => {

        const member = await client.guild.members.get(user.id);

        // * Get the role and return if it doesn't exist
        const role = await client.guild.roles.get(client.config.roles[reactionName]);
        if(!role) return;

        // * Return if the member already has the role
        if(member.roles.has(role.id)) return;

        await member.addRole(role);
        
        console.log(`   # Role ${role.name} given to ${member.user.tag}`);
    }


    client.removeRoleFromReaction = async (user, reactionName) => {

        const member = await client.guild.members.get(user.id);

        // * Get the role and return if it doesn't exist
        const role = await client.guild.roles.get(client.config.roles[reactionName]);
        if(!role) return;

        // * Return if the member doesn't have the role

        if(!member.roles.has(role.id)) return;

        await member.removeRole(role);
        
        console.log(`   # Role ${role.name} removed from ${member.user.tag}`);
    }

}