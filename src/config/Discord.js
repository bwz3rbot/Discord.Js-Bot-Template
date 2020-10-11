// Require the one and only new Discord.Client()
const
    c = require('colors'),
    dateFormat = require('dateformat'),
    Discord = require('discord.js'),
    client = new Discord.Client()
channels = require('../service/channel/ChannelList').channels;
// On ready listener
client.on("ready", () => {
    // Generate timesteamp for console log
    dateTime = dateFormat(new Date())
    console.log(`Successfully Connected as ${client.user.tag} | ${dateTime}`.green)
    client.user.setPresence({ // Set Presence
            activity: {
                type: "WATCHING",
                name: 'the time fly! ⏰🦅'
            },
            status: 'online'
        })
        .then(console.log) // Show Presence In Console
        .catch(console.error) // Log any errors
})
// On Message Listener
client.on('message', (msg) => {
    if (!msg.author.bot) {
        // Runs down the list of channels
        channels.forEach((channel) => {
            // Runs code for correct channel
            channel.on(msg, client);
        });
    }
});
// Login with token defined in pw.env
(async () => {
    await client.login(process.env.TOKEN)
})();
exports.client = client