const Telegraf = require('telegraf')
var localtunnel = require('localtunnel'); //Intall localtunnel first... npm install -g localtunnel 

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.command('image', (ctx) => ctx.replyWithPhoto({ url: 'https://picsum.photos/200/300/?random' }))
bot.on('text', ({ replyWithHTML }) => replyWithHTML('<b>Hello</b>'))

// Start local tunnel and set telegram webhook
var tunnel =  localtunnel(3000, function(err, tunnel) {
    if (err) throw err;
    // the assigned public url for your tunnel
    // i.e. https://abcdefgjhij.localtunnel.me
    console.log(tunnel.url)
    bot.telegram.setWebhook(`${tunnelURL}/telegramTelegrafLocalTunnel`) //configure your webhook URL
});

// Start https webhook
bot.startWebhook('/telegramTelegrafLocalTunnel', null, 3000)
