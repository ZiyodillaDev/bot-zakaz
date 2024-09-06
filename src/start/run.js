const start = async (bot) => {
  bot.catch((e) => {
    console.log(e.message);
  });

  bot.start({ allowed_updates: ["chat_member", "message"] });
};

module.exports = start;
