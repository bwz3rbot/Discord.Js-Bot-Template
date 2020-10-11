// 'general' channel
const cmd = require('../../common/util/Command').command;
// Run on message received from this channel
const on = function (message, client) {
    if (!(message.author === client.user) &&
        message.channel.name === process.env.CHANNEL_NAME) {
        const newCommand = cmd(message.content);
        newCommand ?
            channelCommands(newCommand, message, client) :
            false;
    }
}
// Command and function definitions:
const channelCommands = function (command, message, client) {
    console.dir(command)
    switch (command.directive) {
        case "ping":
            console.log("command was ping");
            console.log("args were: ", command.args);
            break;
        case "hello":
            console.log("was command hello");
            console.log("args were: ", command.args);
            break;
        default:
            console.log("command was not understood...")
            break;
    }
}

exports.on = on