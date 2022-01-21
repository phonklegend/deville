const {Permissions} = require('Discord.js');
module.exports = async (bot,message,args,argsF) => {

    const user = message.mentions.users.first();   

    if(!message.channel.permissionsFor(message.author).has(Permissions.FLAGS.BAN_MEMBERS)) {
        return message.reply("У вас недостаточно прав");
    }
    if(!user) return message.reply("Вы не упомянули пользователя");

    const userMember = bot.Memory.guilds[message.guild.id].members[user.id];
    if(!userMember) return message.reply("Не удалось найти пользователя");

    if(userMember.warns.length >= 2) {
        const quest = {
            type: 'ACTION_ROW',
            components: [
                {
                    type: 'BUTTON', //Это кнопочка
                    label: 'Забанить', //Это имя кнопочки
                    customId: 'ban', //Это ID кнопочки
                    style: 'SECONDARY', //Стиль кнопочки
                    emoji: "", //Эмоджи кнопочки
                    url: null, //Ссылка кнопочки
                    disabled: false //Включена ли кнопочка
                },
                {
                    type: 'BUTTON', //Это кнопочка
                    label: 'Не банить', //Это имя кнопочки
                    customId: 'noban', //Это ID кнопочки
                    style: 'SECONDARY', //Стиль кнопочки
                    emoji: "", //Эмоджи кнопочки
                    url: null, //Ссылка кнопочки
                    disabled: false //Включена ли кнопочка
                }
            ]
        };
        const msg = await message.reply({
            embeds: [{
                title: "Deville | Admin Notification",
                description: "Нажмите на любую из кнопок, соответствующую вашему выбору",
                color: "BLACK"
            }],
            components: [quest]
        });
        
        const collector = await msg.createMessageComponentCollector();
    
        collector.on('collect', Interaction => {
            if(Interaction.user.id !== message.author.id) return message.reply({content: "Вы не имеете права нажимать эту кнопку"});
            if(Interaction.customId == "ban") {
                msg.edit({
                    embeds: [{
                        title: "Deville | Ban",
                        description: "Пользователь был забанен",
                        color: "BLACK"
                    }],
                    components: []
                });
                const member = message.guild.members.cache.get(user.id);
                member.ban();
                userMember.warns = [];
            }

            if(Interaction.customId == "noban") {
                msg.edit({
                    embeds: [{
                        title: "Deville | Notification",
                        description: "Пользователь не был забанен"
                    }],
                    components: []
                });
            }
            
        });
        
    } else {
        userMember.warns.push({
            id: userMember.warns.length,
            reason: argsF.slice(1).join(" ")
        });
        message.reply({
            embeds: [{
                title: "Deville | Warned",
                description: "Пользователь получил варн",
                color: "BLACK"
            }]
        });
    }

    /*
    userMember.warns.splice(0,1); //От этого уберётся 1 варн
    
    */

};
module.exports.names = ["warn", "варн"];