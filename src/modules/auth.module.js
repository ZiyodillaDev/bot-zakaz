const { Router } = require("@grammyjs/router");
const {
  loginImageService,
  loginPhoneService,
  loginRegionService,
} = require("../services/auth.service");
const router = new Router((ctx) => ctx.session.step);
const nameStep = router.route("auth");
const phoneStep = router.route("phone");
const regionStep = router.route("region");
const imageStep = router.route("image");
const lastStep = router.route("last");
nameStep.on("message", async (ctx) => {
  ctx.session.name = ctx.message.text;
  loginPhoneService(ctx);
});

phoneStep.on("message", async (ctx) => {
  ctx.session.number = ctx.message.text || ctx.message?.contact?.phone_number;

  loginRegionService(ctx);
});

regionStep.on("message", async (ctx) => {
  ctx.session.region = ctx.message.text;
  loginImageService(ctx);
});

// Define the chat ID of the target group (replace 'YOUR_GROUP_CHAT_ID' with the actual chat ID)
const TARGET_GROUP_CHAT_ID = "-1002348115980";
const axios = require("axios");
const TELEGRAM_BOT_TOKEN = "7534121687:AAF93Ja3Wq7cdZKUPtNujrDPN4DrqHCT4u4"; // Replace with your actual bot token

imageStep.on(":photo", async (ctx) => {
  const photoFileId = ctx.message.photo[ctx.message.photo.length - 1].file_id;

  ctx.session.image = photoFileId;

  try {
    // Make a direct API request to send the photo
    await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`,
      {
        chat_id: TARGET_GROUP_CHAT_ID,
        photo: photoFileId,
        caption: `👤Name: ${ctx.session.name}\n📞Phone: ${ctx.session.number}\n🇺🇿Region: ${ctx.session.region}`,
      }
    );

    // Send a confirmation message in the current chat
    await ctx.reply(
      `<b>Zakazingiz muvaffaqqiyatli qabul qilindi tez orada adminlarimiz siz bilan bog'lanishadi</b>`,
      { parse_mode: "HTML" }
    );

    ctx.session.step = "last";
  } catch (error) {
    console.error("Error sending photo:", error);
    await ctx.reply("Xatolik yuz berdi, iltimos qaytadan urinib ko'ring.");
  }
});

lastStep.on("message", async (ctx) => {
  await ctx.reply(
    `<b>Zakazingiz muvaffaqqiyatli qabul qilindi tez orada adminlarimiz siz bilan bog'lanishadi</b>`
  );
});

module.exports = router;
