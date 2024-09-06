// Bot
require("dotenv/config");
const { Bot } = require("grammy");

const start = require("./start/run");
const all = require("./start/modules");

const token = process.env.BotToken;
const bot = new Bot(token);

all(bot);
start(bot);
