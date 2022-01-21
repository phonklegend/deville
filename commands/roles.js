module.exports = async (bot,message,args,argsF) => {

    const quest = {
        type: 'ACTION_ROW',
        components: [
            {
                type: 'BUTTON', //Это кнопочка
                label: 'Мальчик', //Это имя кнопочки
                customId: '934049243352666144', //Это ID кнопочки
                style: 'SECONDARY', //Стиль кнопочки
                emoji: "", //Эмоджи кнопочки
                url: null, //Ссылка кнопочки
                disabled: false //Включена ли кнопочка
            },
            {
                type: 'BUTTON', //Это кнопочка
                label: 'Девочка', //Это имя кнопочки
                customId: '934049318703353876', //Это ID кнопочки
                style: 'SECONDARY', //Стиль кнопочки
                emoji: "", //Эмоджи кнопочки
                url: null, //Ссылка кнопочки
                disabled: false //Включена ли кнопочка
            }
        ]
    };
    const msg = await message.reply({
        embeds: [{
            title: "Deville | Выбор ролей",
            description: "Выбери свой пол",
            color: "BLACK"
        }],
        components: [quest]
    });
    
    const collector = await msg.createMessageComponentCollector();

    collector.on('collect', async Interaction => {
        if(Interaction.member.roles.cache.get(Interaction.customId)) {
            Interaction.member.roles.remove(Interaction.customId);
            Interaction.reply("У вас уже была роль, но была снята");

        } else {
            Interaction.member.roles.add(Interaction.customId);
            await Interaction.reply("Роль выдана");
        }
    });



};
module.exports.names = ["roles", "роли"];