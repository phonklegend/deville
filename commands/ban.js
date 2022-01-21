const {Permissions} = require('Discord.js');
module.exports = async (bot,message,args,argsF) => {

    if(!message.channel.permissionsFor(message.author).has(Permissions.FLAGS.BAN_MEMBERS)) {
        return message.reply("У вас недостаточно прав");
    }
    const user = message.mentions.users.first();   
    if(!user) return message.reply("Вы не упомянули пользователя");
    const userMember = message.guild.members.cache.get(user.id);
    
    if(userMember.bannable) {
        userMember.ban();
        return message.reply({
            embeds: [{
                title: "Deville | Ban",
                description: "На сервере был забанен " + `${userMember}`,
                color: "BLACK"
            }]
        });
    } else return message.reply("Не удалось забанить пользователя");

    
    
};
module.exports.names = ["ban"];