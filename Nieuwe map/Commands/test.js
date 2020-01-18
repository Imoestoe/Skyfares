const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        try {

    var text = {
        "embed": {
            "description": "\n",
            "color": 4663761,
            "footer": {
                "text": "By: Imoestoe"
            },
            "timestamp": "Skyfares community",
            "fields": [
                {
                    "name": "Commands:",
                    "value": " ",
                    "inline": true
                },
                {
                    "name": "!Test",
                    "value": "Test this",
                    "inline": false
                },
                {
                    "name": "!Rules",
                    "value": "Show the rules",
                    "inline": false
                }
            ]
        }
    }
    message.author.send(text);

    message.channel.send("This command has shown in your DM");

    } catch (error) {
        message.channel.send("Error: This command is out of service");
    }

}
module.exports.help = {
name: "help"
}