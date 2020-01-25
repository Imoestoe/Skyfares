const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    client.on('message', message => {
        if(message.content === "-invites"){
        var user = null;
        user = message.author;

        message.guild.fetchInvites()
        .then

        (invites =>
            {
                const userInvites = invites.array().filter(o => o.inviter.id === user.id);
                var userInviteCount = 0;
                    for(var i=0; i < userInvites.length; i++)
                    {
                        var invite = userInvites[i];
                        userInviteCount += invite['uses'];
                    }
                        message.reply(`You have invited ${userInviteCount} user(s) to this server. Keep up the good work!`);
            }
        )
}
});
}

module.exports.help = {
  name:"invites"
}