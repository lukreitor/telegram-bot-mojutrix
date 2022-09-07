const Telegraf = require('telegraf'); //import telegraf library

const bot = new Telegraf('2071614188:AAFKi5iDS7S2AxcdrDrYZF3lwfQ0h3LLbUU'); //create a instance of our bot using the telegraf constructor and we incluced the token inside the constructor

bot.start((ctx) => {
   ctx.reply(ctx.from.first_name + " You have entered the start command"); //what to apply to the user
})

bot.help((ctx) => {
   ctx.reply("You have entered the help command");
})

bot.settings((ctx) => {
   ctx.reply("You have entered the settings command");
})

bot.launch();