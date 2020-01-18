const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        try {

    var text = "**Sky Fares** \n\n **Commands**\n > !test - test it";

    message.author.send(text);

    message.channel.send("This command has shown in your DM");

    } catch (error) {
        message.channel.send("Error: This command is out of service");
    }

}
module.exports.help = {
name: "help"
}