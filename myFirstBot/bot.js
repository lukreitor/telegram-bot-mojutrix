/*
const Telegraf = require('telegraf'); //import telegraf library

const bot = new Telegraf('2080431590:AAFwnOO0ueTGua6hq6ZA6KlzAicFZ-DY9EU'); //create a instance of our bot using the telegraf constructor and we incluced the token inside the constructor

//code 
//    /start
bot.use((ctx, next) => {
   ctx.state.apple = 5;
   console.log(ctx);
   ctx.reply("You used the bot");
   next(ctx);
})

bot.start((start), ctx => {
   //ctx.reply(ctx.state.apple);
   //ctx.reply("Hi " + ctx.from.first_name +" You have entered the start command and it is a " + ctx.updateSubTypes[0]); //what to apply to the user
   //console.log(ctx);
   //console.log(ctx.from);
   //console.log(ctx.chat);
   //console.log(ctx.message);
   //console.log(ctx.updateSubTypes);
   
   ctx.reply("Hello ");
   // bot.telegram.sendmesssage(chatId, text, [extra paramethers])
   bot.telegram.sendMessage(ctx.chat.id, " Hello");
})

bot.help((ctx) => {
   ctx.reply("You have entered the help command");
})

bot.settings((ctx) => {
   ctx.reply("You have entered the settings command");
})


//create our own methods
bot.command(["test", "Test", "TEST"], (ctx) => {
   ctx.reply("Personalized Command");
});


//reply to specific messages
bot.hears("cat", (ctx) =>  {
   ctx.reply("Mew");
});

//update types
bot.on("text", (ctx) => {
   ctx.reply("This is a text message");
});

bot.on("audio", (ctx) => {
   ctx.reply("This is a reply to a audio message");
});

bot.on("video", (ctx) => {
   ctx.reply("This is a reply to a video message");
});

bot.on("sticker", (ctx) => {
   ctx.reply("This is a reply to a sticker message");
});

//Handles username eg. @botfather
bot.mention("@botfather", (ctx) => {
   ctx.reply("Hello " +  ctx.from.first_name);
})

//handles username eg @botfather
bot.phone("+1 730 263-4233", (ctx) => {
   ctx.reply("Phone method");
})

//handles hashtag eg. #hash
bot.hashtag("hash", (ctx) => {
   ctx.reply("hashtag method");
})

bot.launch();

//to start the bot node bot.js



////when using extra parameters
   //bot.telegram.sendMessage(chatId, text, [extraParams]);
   bot.telegram.sendMessage(ctx.chat.id, "Hello", {
      parse_mode: 'Markdown', 
      disable_notifications: true
   })

   */





   /* ------------------ECHOBOT------------------
   // echobot username
const Telegraf = require("telegraf");
const bot = new Telegraf('2080431590:AAFwnOO0ueTGua6hq6ZA6KlzAicFZ-DY9EU'); 

const helpMessage = `
   Say Something to me
   /star - start the bot
   /help - command referrence
   /echo 
`;

bot.use((ctx, next) => {
   //console.log(chat)

   //console.log("Someome used your bot");
   //consolelog(ctx);
   //console.log(ctx.from);
   
   //console.log(ctx)
   if (ctx.updateSubTypes[0] == "text")
   {
      console.log(ctx.from.username + " said: " + ctx.message.text);
      bot.telegram.sendMessage(ctx.from.username, ctx.message.text)
   }
   else
   {
      console.log(ctx.from.username + " send " + ctx.updateSubTypes[0]);
   }
   next();
})
   


bot.start((ctx) => {
   ctx.reply("Hi i am the Echo Bot");
   ctx.reply(helpMessage);
})

bot.help((ctx) => {
   ctx.reply(helpMessage);
})

bot.command("echo", (ctx) => {
   console.log(ctx);
   let input = ctx.message.text;
   let inputArray = input.split(" ");
   console.log(inputArray);

   let message = "";

   if (inputArray.length == 1)
   {
      message = "You said echo";
   }
   else 
   {
      inputArray.shift();
      message = inputArray.join("");
   }
   ctx.reply(message);
})



bot.launch();


*/

const Telegraf = require("telegraf");
const bot = new Telegraf('2080431590:AAFwnOO0ueTGua6hq6ZA6KlzAicFZ-DY9EU');

bot.command('test', ctx => {
   //url 
   //bot.telegram.sendPhoto(ctx.chat.id, 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')

   //file path
   //bot.telegram.sendPhoto(ctx.chat.id, {source: "VID-20210331-WA0033.mp4"}); //it can be in our computer

   //file id
   // bot.telegram.sendPhoto(ctx.chat.id, "")
});

bot.command('newyork', ctx => {
   bot.telegram.sendPhoto(ctx.chat.id, {source: "4335599.jpg"});
})

bot.launch();