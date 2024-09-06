const { Composer } = require("grammy");
const {
  startService,
  shareService,
  helpService,
} = require("../services/commands.service");

const bot = new Composer();

// Command Start
bot.command("start", async (ctx) => {
  startService(ctx);
});

// Command Help
bot.command("help", helpService);

// Command share
bot.command("share", shareService);

module.exports = bot;
