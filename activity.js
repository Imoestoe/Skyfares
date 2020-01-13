module.exports = bot => {



let activities = [ `${bot.users.size} users!` ], i = 0;
setInterval;{() => bot.user.setActivity(`${bot.prefix}help | ${activities[i++ % activities.length]}`, { type: "WATCHING" }), 15000;
}};