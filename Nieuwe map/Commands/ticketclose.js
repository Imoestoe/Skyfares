const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

    // Id van category van tickets.
    const categoryId = "698916608520880129";
 
    // Als bericht in ticket kanaal is dan verwijder kanaal ander zend bericht
    if (message.channel.parentID == categoryId) {
 
        message.channel.delete();
 
    } else {
 
        message.channel.send("Error: Something went wrong!");
 
    }
 
    var embedCloseTicket = new discord.RichEmbed()
        .setTitle(message.channel.name, 's ticket')
        .setDescription("Is gemarkeerd als gesloten!")
        .setFooter("Orian ● ticket-system");
 
    // Vind kanaal voor de logs.
    var logChannel = message.guild.channels.find("name", "logs");
    if (!logChannel) return message.channel.send("Channel doesn't exit.");
 
    logChannel.send(embedCloseTicket);
 
}
 
module.exports.help = {
    name: "close",
    description: "Sluit een ticket af"
}