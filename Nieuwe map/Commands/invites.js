const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

var user = "";
    user = args.splice(0, args.length).join(' ');
    userInvites = invites.array().filter(o => o.inviter.id === user.id);
    var user = message.mentions.users.first();
    var userInviteCount = 0;
    for(var i=0; i < userInvites.length; i++)
    {
        var invite = userInvites[i];
        userInviteCount += invite['uses'];
    }

        message.reply(`You have invited ${userInviteCount} user(s) to this server. Keep up the good work!`);




    // Verwijder het bericht dat net is gemaakt door de gebruiker.



}
    module.exports.help = {
        name: "invites",
        description: "Start een giveaway"
    }