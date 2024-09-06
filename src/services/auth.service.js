const { Keyboard, InlineKeyboard } = require("grammy");
const { menuBtn } = require("../helpers/menu.helper");
const uzbekistan_regions = require("../utils/region-menu");

const loginPhoneService = async (ctx) => {
  await ctx.reply(
    `<b>Telefon raqamingizni jo'nating yoki yozib qoldiring</b>`,
    {
      parse_mode: "HTML",
      reply_markup: new Keyboard()
        .row()
        .requestContact("Telefon raqam")
        .resized(),
    }
  );

  ctx.session.step = "phone";
};

const loginRegionService = async (ctx) => {
  await ctx.reply(`<b>Xududni tanlang!</b>`, {
    parse_mode: "HTML",
    reply_markup: new Keyboard()
      .text("Toshkent shahri")
      .text("Andijon viloyati")
      .text("Buxoro viloyati")
      .text("Farg'ona viloyati")
      .text("Jizzax viloyati")
      .text("Xorazm viloyati")
      .text("Namangan viloyati")
      .text("Navoiy viloyati")
      .text("Samarqand viloyati")
      .text("Sirdaryo viloyati")
      .text("Surxondaryo viloyati")
      .text("Toshkent viloyati")
      .text("Qoraqalpog'iston Respublikasi")
      .resized(),
  });

  ctx.session.step = "region";
};

const loginImageService = async (ctx) => {
  await ctx.reply(
    `<b>O'zingizga yoqgan kyim haqida malumot olish uchun rasmini jo'nating</b>`,
    {
      parse_mode: "HTML",
      reply_markup: {
        remove_keyboard: true,
      },
    }
  );

  ctx.session.step = "image";
};

module.exports = {
  loginImageService,
  loginPhoneService,
  loginRegionService,
};
