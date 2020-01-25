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
var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
var args = messageArray.slice(1);
var commands = bot.commands.get(command.slice(prefix.length));
if(commands) commands.run(bot, message, args);


});

<<<<<<< HEAD

=======
bot.on('message', message => {
  if(message.content === "!invites"){
  var user = null;
  user = message.author;

  message.guild.fetchInvites()
  .then

  (invites =>
      {
          const userInvites = invites.array().filter(o => o.inviter.id === user.id);
          var userInviteCount = 0;
              for(var i=0; i < userInvites.length; i++)
              {
                  var invite = userInvites[i];
                  userInviteCount += invite['uses'];
              }
                  message.reply(`You have invited ${userInviteCount} user(s) to this server. Keep up the good work!`);
      }
  )
}
});
>>>>>>> parent of 2ee253b... awdawd


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

bot.on('message', message => {
  if(message.content === "-invites"){
  var user = null;
  user = message.author;

  message.guild.fetchInvites()
  .then

  (invites =>
      {
          const userInvites = invites.array().filter(o => o.inviter.id === user.id);
          var userInviteCount = 0;
              for(var i=0; i < userInvites.length; i++)
              {
                  var invite = userInvites[i];
                  userInviteCount += invite['uses'];
              }
                  message.reply(`You have invited ${userInviteCount} user(s) to this server.`);
      }
  )
}
});

bot.login(process.env.token);