const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

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
                    "name": "!Rules",
                    "value": "Command discription.",
                    "inline": false
                },
                {
                    "name": "!Help",
                    "value": "Command discription.",
                    "inline": false
                },
                {
                    "name": "!soon",
                    "value": "Command discription.",
                    "inline": false
                },
                {
                    "name": "!soon",
                    "value": "Command discription.",
                    "inline": false
                }
            ]
        }}
    message.author.send(text);

    message.channel.send("This command has shown in your DM");

    } catch (error) {
        message.channel.send("Error: This command is out of service");
    }

}
module.exports.help = {
name: "help"
}