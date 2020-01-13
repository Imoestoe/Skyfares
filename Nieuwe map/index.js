const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();

bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`)


      let activities = [ `${bot.users} users!`], i = 0
      setInterval(() => bot.user.setActivity(`!help | ${activities[i++ % activities.length]}`, { type: "WATCHING" }), 15000)
})

bot.login(process.env.token);