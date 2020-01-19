const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete(1000);
        try {

    var text = {
        "embed": {
            "color": 9252275,
            "author": {
                "name": "Help"
            },
            "footer": {
                "text": "By: Imoestoe"
            },
            "timestamp": "©Skyfares",
            "fields": [
                {
                    "name": "/",
                    "value": "!Rules",
                    "inline": false
                },
                {
                    "name": "Command discription.",
                    "value": "!ticket",
                    "inline": false
                },
                {
                    "name": "Command discription.",
                    "value": "!test",
                    "inline": false
                },
                {
                    "name": "Command discription.",
                    "value": "/" ,
                    "inline": false
                }
            ]
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