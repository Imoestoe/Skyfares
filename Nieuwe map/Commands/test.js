const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete(1000);
        try {

    var text = {
        "embed": {
            "title": "Help menu",
            "description": "**Commands:**\n\n!Ticket\n`Dit maakt een prive tekst kanaal aan, waar je kan worden geholpen door staff.`\n` Je kan bugs en spelers raporteren zonder dat iemand het door heeft!`\n\n!Help\n`Zie alle commando's.`\n\n\n!Test\n`Command discription`\n\n\n!Test\n`Command discription`",
            "footer": {
                "text": "Blockville ● Help-system"
            },
            "color": 8405687
        }};
    message.author.send(text);

    message.channel.send("Alle commando's zijn in je privé berichten gestuurd. Zie je dit niet? Zet bij de server even je prive berichten aan, zie #informatie voor instructie.");

    } catch (error) {
        message.channel.send("Error: This command is out of service");
    }

}
module.exports.help = {
name: "help"
}