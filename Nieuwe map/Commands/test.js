const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete(1000);
        try {

    var text = {
        "embed": {
            "title": "Help menu",
            "description": "**Commands:**\n\n!Rules\n`Command discription`\n\n!Test\n`Command discription`\n\n\n!Test\n`Command discription`\n\n\n!Test\n`Command discription`",
            "footer": {
                "text": "By: Imoestoe | ©Skyfares"
            },
            "color": 8405687
        }};
    message.author.send(text);

    message.channel.send("This command has shown in your DM");

    } catch (error) {
        message.channel.send("Error: This command is out of service");
    }

}
module.exports.help = {
name: "help"
}