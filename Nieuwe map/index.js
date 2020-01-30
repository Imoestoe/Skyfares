const botConfig = require("./botconfig.json");
const discord = require("discord.js");
const bot = new discord.Client();
const fs = require("fs");

bot.commands = new discord.Collection();


fs.readdir("./Commands/", (err, files) => {

  if (err) console.log(err);

  var jsFiles = files.filter(f => f.split(".").pop() === "js");

  if (jsFiles.length <= 0) {
  console.log("can not found any command files");
   return;
  }

  jsFiles.forEach((f, i) => {
    var fileGet = require(`./Commands/${f}`);
    console.log(`File ${f} loaded`);

    bot.commands.set(fileGet.help.name, fileGet);
    bot.mutes = require("./mutes.json");
    
})

});



bot.on("message", async message => {

if (message.author.bot) return;
if (message.channel.type === "dm") return;
var prefix = botConfig.prefix;
var messageArray = message.content.split(" ");
var command = messageArray[0];
var arguments = messageArray.slice(1);
var commands = bot.commands.get(command.slice(prefix.length));
if(commands) commands.run(bot, message, arguments);


});


var jsonPath = './roles.json';
var jsonRead = fs.readFileSync(jsonPath);
var jsonFile = JSON.parse(jsonRead);

bot.on('guildMemberAdd', member => {
    var guildId = member.guild.id;
    if (!jsonFile[guildId]) {
        console.log('Role could not be found')
    } else {
        let autoRole = jsonFile[guildId]
        let myRole = member.guild.roles.find(role => role.name === autoRole.role);
        member.addRole(myRole)
    }
});

bot.setInterval(() => {
  for(let i in bot.mutes) {
    let time = bot.mutes[i].time;
    let guildId = bot.mutes[i].guild;
    let guild = bot.guilds.get(guildId);
    let member = guild.members.get(i);
    let mutedRole = guild.roles.find(r => r.name === "Muted");
    if(!mutedRole) continue;

    if(Date.now() > time) {
      console.log(`${i} is now able to be unmuted!`);

      member.removeRole(mutedRole);
      delete bot.mutes[i];

      fs.writeFile("./mutes.json", JSON.stringify(bot.mutes), err => {
        if(err) throw err;
        console.log(`I have unmuted ${member.user.tag}.`);
      });
    }
  }
}, 5000);



//bot.on('message', message => {
//  if (message.channel.id === "668520516424040479") {
//      message.react('✅')
//          .then(() => { 
//              message.react('❌')
//          });
//  }
//});


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`)


      let activities = [ `!help | ${bot.users.size-1} users` , `play.skyfarers.net` ], i = 0;
      setInterval(() => bot.user.setActivity(`${activities[i++ % activities.length]}`, { type: "WATCHING" }), 15000)
});

bot.login(process.env.token);