const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    // Id van category van tickets.
    const categoryId = "668052353961820161";
 
    // Als bericht in ticket kanaal is dan verwijder kanaal ander zend bericht
    if (message.channel.parentID == categoryId) {
 
        message.channel.delete();
 
    } else {
 
        message.channel.send("Error: Something went wrong!");
 
    }
 
    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("Hoi, " + message.channel.name)
        .setDescription("This ticket has marked as closed!")
        .setFooter("ticket closed");
 
    // Vind kanaal voor de logs.
    var logChannel = message.guild.channels.find("name", "log");
    if (!logChannel) return message.channel.send("Channel doesn't exit.");
 
    logChannel.send(embedCloseTicket);
 
}
 
module.exports.help = {
    name: "close",
    description: "Sluit een ticket af"
}