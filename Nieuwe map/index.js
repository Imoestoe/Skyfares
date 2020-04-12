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



    }

);



bot.on('guildMemberAdd', member => {
    member.guild.channels.get('698924007206158406').send(embedwelcome); 



    var embedwelcome = new discord.RichEmbed()
    .setTitle(member)
    .setDescription("Is gejoined")
    .setFooter("Orian ● ticket-system");
});

bot.on('guildMemberAdd', member => {
    member.guild.defaultChannel.send(`Welkom in de server van kingdom Orian, ${member}! Lees nog even alle regels en informatie door in #regels en #informatie en veel plezier.`);
    console.log(`${member.user.username} has joined`);
});

bot.on('guildMemberAdd', (guildMember) => {
    guildMember.addRole(guildMember.guild.roles.find(role => role.name === "Bezoeker"));
 });

//bot.on('message', message => {
//  if (message.channel.id === "692790597169315840") {
//      message.react('✅')
//        .then(() => { 
//              message.react('❌')
//          });
//  }
//});
//bot.on('message', message => {
//  if (message.channel.id === "692790637715652659") {
//      message.react('✅')
//          .then(() => { 
//              message.react('❌')
//          });
// }
//});


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`)


      let activities = [ `!help | ${bot.users.size-1} users` , `play.skyfarers.net` ], i = 0;
      setInterval(() => bot.user.setActivity(`${activities[i++ % activities.length]}`, { type: "WATCHING" }), 15000)
});

bot.login(process.env.token);