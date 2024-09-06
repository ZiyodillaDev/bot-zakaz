const { Keyboard } = require("grammy");

const loginPhoneService = async (ctx) => {
  await ctx.reply(
    `<b>Favqulodda vaziyatlar uchun qo'shimcha ikkinchi raqamingizni yuboring</b>`,
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
      .row()
      .text("Buxoro viloyati")
      .text("Farg'ona viloyati")
      .row()
      .text("Jizzax viloyati")
      .text("Xorazm viloyati")
      .row()
      .text("Namangan viloyati")
      .text("Navoiy viloyati")
      .row()
      .text("Samarqand viloyati")
      .text("Sirdaryo viloyati")
      .row()
      .text("Surxondaryo viloyati")
      .text("Toshkent viloyati")
      .row()
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
