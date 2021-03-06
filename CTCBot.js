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
    If you have any questions feel free to ask me with '!' or our mentors in the general_questions text channel:)`)
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
        case 'amir':
            message.channel.send("ahchinaei@eecs.yorku.ca")
        break;
        case 'info':
            message.channel.send(" Activity follows the CTC schedule as per usual.\nM 12:30-14:30\nT 14:30-16:30\nW 16:30-18:30\nR 18:30-20:30\nF 17:30-19:30 \nThe server functions as a virtual CTC room. \nTake a look around. There is a mentor (look for orange name tags) for each voice channel active during the above times.\nIf you have any questions feel free to ask in the general_questions text channel:)")
        break;
        case 'commands':
            message.channel.send("I am at your service. Say \'hello\' or ask me for \'info\', the course \'outline\', ask to \'clear\' text channels, 'video' to start a video channel or ask about my 'bestfriend'.")
        break;
        case 'bicycle':
            message.channel.send("https://en.wikipedia.org/wiki/Flowchart")
        break;
        case 'bestfriend':
            message.channel.send("https://www.w3schools.com/")
        break;
        case 'video':
            message.channel.send("To start a video call, enter the link \nhttps://www.discordapp.com/channels/688161995530174469/ \'Enter your channel ID here\'\nMentor Session 1 ID: 688167235885596696\nMentor Session 2 ID: 688167296916652191\nMentor Session 3 ID: 688167259687878694\nMentor Session 4 ID: 689548906446848050\nTo access the channel ID, right click on the channel you are using and select Copy ID:)")
        break;
        case 'clear':
           message.channel.bulkDelete(100);
        break;
    }
})
