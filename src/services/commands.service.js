const { InlineKeyboard } = require("grammy");

const startService = async (ctx) => {
  await ctx.reply(
    `<b>Assalomu alekum <a href="tg://user?id=${ctx.from.id}">${
      ctx.from.first_name
    } ${
      ctx.from.last_name || ""
    }</a>. Zakaz berish uchun malumotlaringizni qoldiring! \n\nRo'yxatdan o'tishni boshlash uchun iltimos ismingizni kiriting.</b>`,
    {
      parse_mode: "HTML",
    }
  );

  ctx.session.step = "auth";
};

const helpService = async (ctx) => {
  const shareURL = `https://t.me/AAAzimov`;
  const keyboard = new InlineKeyboard().url("Support", shareURL);
  await ctx.reply(
    `Qandaydur savol yoki taklifingiz bormi❓\n \n Biz bilan bog'laning✅`,
    {
      parse_mode: "HTML",
      reply_markup: keyboard,
    }
  );
};

const shareService = async (ctx) => {
  const shareURL = `https://t.me/share/url?url=https://t.me/technolifesupportbott`;
  const keyboard = new InlineKeyboard().url("Botni ulashish", shareURL);
  await ctx.replyWithPhoto(
    "https://telegra.ph/file/b58bf5310e124e462572b.jpg",
    {
      caption: `Bizni qo'llab quvvatlash va yaqinlaringizni ham taklif qilib ishimiz rivojiga o'z hissangizni qo'shing.🚀`,
      parse_mode: "HTML",
      reply_markup: keyboard,
    }
  );
};

module.exports = { startService, shareService, helpService };
