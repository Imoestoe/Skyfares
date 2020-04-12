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

// Genereer random xp.
    var randomxp = Math.floor(Math.random(1) * 15) + 1;

    // Verkrijg id van de gebruiker.
    var idUser = message.author.id;

    // console.log(randomxp);

    // Als persoon nog niet in file is maak dan standaard aan.
    if (!levelfile[idUser]) {

        levelfile[idUser] = {

            xp: 0,
            level: 0

        };

    }

    // Voeg xp toe.
    levelfile[idUser].xp += randomxp;

    // Verkrijg level van de gebruiker.
    var levelUser = levelfile[idUser].level;
    // Verkrijg xp van de gebruiker.
    var xpUser = levelfile[idUser].xp;
    // Bereken volgend level op basis van de xp.
    var nextLevelXp = levelUser * 300;
    
    // Als het level 0 is zet dan xp op 100.
    if (nextLevelXp === 0) nextLevelXp = 100;

    console.log(nextLevelXp + " " + xpUser);

    // Als gebruikeer volgend level heeft bereikt zet level 1 hoger en zet in file.
    // Let op Nodemon restart wegens dat we de file als require hebben binnengehaald.
    if (xpUser >= nextLevelXp) {

        levelfile[idUser].level += 1;

        // Wegschrijven van data. Je kan dit ook altijd opslaan maar dit zorgt ervoor dat het data
        // verkeer te groot wordt.
        fs.writeFile("./data/level.json", JSON.stringify(levelfile), err => {

            if (err) console.log(err);

        });

        // Zenden van een embed met gegevens.
        var embedLevel = new discord.RichEmbed()
            .setDescription("***Level hoger***")
            .setColor("#29e53f")
            .addField("Nieuw level: ", levelfile[idUser].level);

        message.channel.send(embedLevel);

    }

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


      let activities = [ `!help | ${bot.users.size-1} users` , `play.blockville.nl` ], i = 0;
      setInterval(() => bot.user.setActivity(`${activities[i++ % activities.length]}`, { type: "WATCHING" }), 15000)
});

bot.login(process.env.token);