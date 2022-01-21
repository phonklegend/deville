module.exports = (bot) => {
    console.log(bot.user.username + " successfully started")
    
    bot.user.setPresence({ activities: [{ name: 'за сервером', type: "3" }], status: 'dnd' });

};