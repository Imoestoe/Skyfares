const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete(1000); 
    let inline = true;
    let resence = true;
    const status = {
        online: "<:thumbsup_tone3:> Online",
        idle: "<:thumbsup_tone3:> Idle",
        dnd: "<:thumbsup_tone3:> Do Not Disturb",
        offline: "<:thumbsup_tone3:> Offline/Invisible"
      };
        
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;;
let target = message.mentions.users.first() || message.author;

if (member.user.bot === true) {
    bot = "<:thumbsup_tone3: > Yes";
  } else {
    bot = "<:thumbsup_tone3: > No";
  };

            let embed = new Discord.RichEmbed()
                .setAuthor(member.user.username)
                .setThumbnail((target.displayAvatarURL))
                .setColor("#00ff00")
                .addField("Full Username", `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Nickname", `${member.nickname !== null ? `<:thumbsup_tone3:> Nickname: ${member.nickname}` : "<:thumbsup_tone3:> None"}`, true)
                .addField("Bot", `${bot}`,inline, true)
                .addField("Status", `${status[member.user.presence.status]}`, inline, true)
                .addField("Playing", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "<:thumbsup_tone3: > Not playing"}`,inline, true)
                .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "<:thumbsup_tone3:> No Roles"}`, true)
                .addField("Joined Discord At", member.user.createdAt)
                .setFooter(`Information about ${member.user.username}`)
                .setTimestamp();
    
            message.channel.send(embed);

    }

    module.exports.help = {
        name: "userinfo",
        description: "Swdawd"
    }