const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready' =>{
console.log("Bot online");
});

client.on('guildMemberAdd', async member => {
const channelid = "ID";
const channel = message.guild.channels.cache.get(channelid);
const role = message.guild.roles.cache.find(r => r.name === "user");
member.roles.add(role.id);
const embed = new Discord.MessageEmbed() 
.setTitle("Welcome Message")
.setColor("GREEN")
.setDescription("**WELCOME**" + member.user.username);
});
client.login();
