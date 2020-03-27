const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
    // ID van de categorie van de tickets.
    const categoryId = "692803460248371380";
 
    // Verkrijg Gebruikersnaam
    var userName = message.author.username;
    // Verkrijg discriminator
    var userDiscriminator = message.author.discriminator;
 
    // Als ticket al gemaakt is
    var bool = false;
 
    // Kijk na als ticket al gemaakt is.
    message.guild.channels.forEach((channel) => {
 
        // Als ticket is gemaakt, zend bericht.
        if (channel.name == "🎫-" + userName.toLowerCase() + "-" + userDiscriminator) {
 
            message.channel.send("Je hebt al een ticket!");
 
            bool = true;
 
        }
 
    });
 
    // Als ticket return code.
    if (bool == true) return;
 
    var embedCreateTicket = new discord.RichEmbed()
        .setTitle("Hey, " + message.author.username)
        .setFooter("Je support channel word aangemaakt.");
 
    message.channel.send(embedCreateTicket);
 
    // Maak kanaal en zet in juiste categorie.
    message.guild.createChannel("🎫-" + userName + "-" + userDiscriminator, "text").then((createdChan) => { // Maak kanaal
 
        createdChan.setParent(categoryId).then((settedParent) => { // Zet kanaal in category.
 
            // Zet perms voor iedereen
            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            settedParent.overwritePermissions(message.guild.roles.find('name', "Ticket Team"), {                 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true 
            
            });
            // Zet perms voor de gebruiker die ticket heeft aangemaakt.
            settedParent.overwritePermissions(message.author, {
 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
 
            });
 
            var embedParent = new discord.RichEmbed()
                .setTitle("Hey, " + message.author.username.toString())
                .setDescription("Typ je bericht hier a.u.b, onze moderators helpen je zo snel mogelijk!")
                .setFooter("Blockville ● ticket-system");
                
 
            settedParent.send(embedParent);
        }).catch(err => {
            message.channel.send("Error: Something went wrong.");
        });
 
    }).catch(err => {
        message.channel.send("Error: Something went wrong.");
    });
 
}
 
module.exports.help = {
    name: "ticket",
    description: "Maak een ticket aan"
}