const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();
bot.commands = new discord.Collection();
const fs = require("fs");

fs.readdir("./Commands/", (err, files) => {

  if (err) console.log(err);

  var jsFiles = files.filter(f => f.split(".").pop() === "js");

  if (jsFiles.length <= 0) {
  console.log("can not found any command files");
   return;
  }

jsFiles.forEach((f,i) => {
var fileGet = require(`./Commands/${f}`);
console.log(`File ${f} loaded`);

})

});



bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`)


      let activities = [ `!help | ${bot.users.size-1} users` , `play.skyfares.net` ], i = 0;
      setInterval(() => bot.user.setActivity(`${activities[i++ % activities.length]}`, { type: "WATCHING" }), 15000)
})
bot.login(process.env.token);