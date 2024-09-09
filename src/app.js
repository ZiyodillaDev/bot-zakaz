// Bot
require("dotenv/config");
const express = require("express");
const { Bot } = require("grammy");

const start = require("./start/run");
const all = require("./start/modules");

const token = process.env.BotToken;
const bot = new Bot(token);
const app = express();

app.post("/webhook", (req, res) => {
  bot.handleUpdate(req.body);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const WebHook = process.env.WebHook;
bot.api.setWebhook(WebHook);

all(bot);
start(bot);
