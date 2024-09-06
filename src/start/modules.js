const { session, MemorySessionStorage } = require("grammy");
const { chatMembers } = require("@grammyjs/chat-members");
const adapter = new MemorySessionStorage();
const commandsModule = require("../modules/commands.module");
const authModule = require("../modules/auth.module");
const all = (bot) => {
  bot.use(session({ initial: () => ({ step: "start" }) }));
  bot.use(chatMembers(adapter));
  bot.use(commandsModule);
  bot.use(authModule);
};
module.exports = all;
