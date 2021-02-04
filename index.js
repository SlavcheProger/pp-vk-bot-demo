const token = "d62a982953a1e3d9eba86b06794c0fbcda2e8872511ed8443e52ba32aefde99306a869379216cec59a71fn"

const VkBot = require('node-vk-bot-api');

const bot = new VkBot(token);

bot.command('/start', (ctx) => {
  ctx.reply('Hello!');
});

bot.startPolling();