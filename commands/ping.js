module.exports = async (bot, message, args, argsF) => {
    
    message.channel.send({
            content: "Ping: 0 ms"
        });

};
module.exports.names = ["ping", "пинг"];
