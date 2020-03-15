const {Client, MessageAttachment} = require('discord.js');
const bot = new Client();

const PREFIX = '!';
var version ='1.0.1';

bot.on('ready', () =>{
    console.log("CTCBot is online");
});

bot.login(process.env.BOT_TOKEN);

bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general_questions');
    if (!channel) return;
   channel.send(`Welcome to the CTC Discord Server ${member}! 
    Activity follows the CTC schedule as per usual. 
    • M 12:30-14:30
    • T 14:30-16:30
    • W 16:30-18:30
    • R 18:30-20:30
    • F 17:30-19:30

    The server functions as a virtual CTC room. Take a look around. 
    There is a mentor (look for orange name tags) for each voice channel active during the above times.
    If you have any questions feel free to as in the general_questions text channel:)`)
});

bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'outline':
            const attachment = new MessageAttachment('./Outline.pdf')
            message.channel.send(message.author, attachment);
        break;
        case 'hello':
            message.channel.send("Hello! Server activity follows the usual CTC schedule:)")
        break;
        case 'bicycle':
            message.channel.send("ahchinaei@eecs.yorku.ca")
        break;
        case 'info':
            message.channel.send(" Activity follows the CTC schedule as per usual.\nM 12:30-14:30\nT 14:30-16:30\nW 16:30-18:30\nR 18:30-20:30\nF 17:30-19:30 \nThe server functions as a virtual CTC room. \nTake a look around. There is a mentor (look for orange name tags) for each voice channel active during the above times.\nIf you have any questions feel free to as in the general_questions text channel:)")
    }
})
