module.exports = async (bot, message, args, argsF) => {
    
    message.channel.send({
            content: "Ping: " + Math.ceil(Math.random()*4) + " ms"
        });

};
module.exports.names = ["ping", "пинг"];
