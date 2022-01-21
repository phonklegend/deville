module.exports = async (bot,message,args,argsF) => {

    if(message.author.id == "1") return;
    const admin = bot.users.cache.get("852663296959184896");

    admin.send(`${message.author.username} обратился в репорт с текстом: ${message.content}`);

};
module.exports.names = ["report"];