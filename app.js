// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setGame(`Brainletting BoxDelux`);
});
var saidAlready = false;


client.on("message", message => {
  // This event will run on every single message received, from any channel or DM.
    console.log(saidAlready);
	
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
 // if(!message.author.bot && !saidAlready){ message.channel.send('Ready to brainlet!'); saidAlready = true;}

  
  
  console.log(message.author.username);
  
   if (Math.random() < 0.005) message.react("🤔"); 
  
  
  if(message.author.username == 'EpicBox') {
var cantun = client.emojis.find("name", "cantunbox");
 var brainlet = client.emojis.find("name", "brainlet");
 
 
 if (Math.random() < 0.05) message.react(cantun.id);  
 
 if (Math.random() < 0.03)  message.react(brainlet.id); 
 }
 
 
   if(message.author.username == 'Irak_LØbster') {

   if (Math.random() < 0.2) message.react("🤢"); 
 }
  
  
  
  console.log(saidAlready);
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.

});

client.login(config.token);
           