const {Permissions} = require('Discord.js');
module.exports = async (bot,message,args,argsF) => {

    if(!message.channel.permissionsFor(bot.user).has(Permissions.FLAGS.ADMINISTRATOR)) {
        return message.reply({
            embeds: [{
                title: "Deville | Clear System Error #1",
                description: "Error #1: У бота недостаточно прав для совершения данного действия",
                color: "BLACK"
            }]
        });
    }
    if(!message.channel.permissionsFor(message.author).has(Permissions.FLAGS.ADMINISTRATOR)) {
        return message.reply({
            embeds: [{
                title: "Deville | Clear System Error #2",
                description: "Error #2: У вас недостаточно прав для совершения данного действия",
                color: "BLACK"
            }]
        });
    }

    if(isNaN(+args[0])) return message.reply({
        embeds: [{
            title: "Deville | Clear System Error #3",
            description: "Error #3: Вы не указали число сообщений, подлежащих удалению",
            color: "BLACK"
        }]
    }); 
    const numArg = +args[0];
    if(numArg>100) return message.reply({
        embeds: [{
            title: "Deville | Clear System Error #4",
            description: "Error #4: Вы указали число, большее чем 100",
            color: "BLACK"
        }]
    }); 
    
    await message.channel.messages.fetch();
    await message.channel.bulkDelete(numArg);
    message.channel.send({
        embeds: [{
            title: "Deville | Clear System Notification",
            description: "Сообщения удалены в количестве " + (numArg) + " сообщений",
            color: "BLACK"
        }]
    });

};
module.exports.names = ["clear"];