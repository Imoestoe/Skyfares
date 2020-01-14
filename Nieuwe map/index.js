const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const Client = new discord.Client();

bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`)


      let activities = [ `!help | ${Client.users.size-1} users` , `play.skyfares.net` ], i = 0;
      setInterval(() => bot.user.setActivity(`${activities[i++ % activities.length]}`, { type: "WATCHING" }), 15000)
})

Client.login(process.env.token);