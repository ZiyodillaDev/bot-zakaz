const commands = async (bot) => {
  await bot.api.setMyCommands([
    { command: "start", description: "Starting the bot" },
    { command: "share", description: "Sharing is caring" },
    { command: "help", description: "Help and Support" },
  ]);
};

module.exports = commands;
