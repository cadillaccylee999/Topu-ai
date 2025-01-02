//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "255673750170";
global.sudo = process.env.SUDO || "255673750170";
global.owner = process.env.OWNER_NUMBER || "255673750170";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0JyU0ZZc1RjSnY5Z1J5QjhpUDlJSXNSY0FmdlpzZmpTRDV4R09PMW5scz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHNLNEtLK2lTbHRpYkhvaEp6ZTYxYXFiaTNLVExzdDVpeGJHeDU4WnBYOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4RDlCOHhHSk5QTmE0cEd2cFpCSUNIL2RCbk5RR3FxWXVxWFFING95MjM4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SlNmU3hlSmxKWGlSQk9iUnBweURWWUdtT3pjRW5FZVRTR1FPTTlaREdJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitOTU1kbmF0S0I2TXhCa1Q4WHQvekpFMzdMTDdlTTg3WTNQM1N3enJkMnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRTT3dMUmUzelNoSmwwNnYzM0o3S3h6Rnd0ZS9COVA5WGJJclN6Ky85QVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0gvbjdsbk81cXVIdzZKZzFDQkpwaHRrZ1Qya0Q5UzkzdkNkQzZXOHpIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGdVSFFHalR3Nk1CaDdZWk94aDVtWGxzQnpkZXpYRDIvYmdzaTFneTZncz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImkzQUZsRVRFRWE2d1lHRFlIMDBOMDFXTGZURHhSNDVJWTNpd25BMGhiS1RrR2hjYy9TUFVaT055KzJGR25ZZ1h0QjV0OUNWYnlOZ2NYRmNWN0ZJNkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAwLCJhZHZTZWNyZXRLZXkiOiJvWm5vTGg5Ym1mdmJpTGp6eHpIVHJKZytwSHVlWHB6b2M2ZmlsWDFYSk1RPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5WXlhVm1CWlJ3R2ZJMVhXNUdhOC1BIiwicGhvbmVJZCI6IjMxOTIxZmIzLTc1MDEtNDJmZC1iMWRiLTI4MzVhZDhjMjg1NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxZnYrRmZHZmdGVzNLS0p0SUhCNis2UUw5bm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2JjYkFVY3hUZFhSZ01LRGdlMVltWUNxTE9ZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhRQVZZWjlZIiwibWUiOnsiaWQiOiIyNzY5Mzc5ODA0ODozM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZa8aMy28J2XjvCdlrxrzLbwnZi64LiFXuKAou+7jOKAol7guIUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xEdnFxZ0dFTVhhcTdvR0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijl0TWRyR1NtMDVPYmRJeWQyR000dUtvTS9SdGtsZFV4bHFBMTBaMm41aTg9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii9SNDNOdEcwUEdGUnRnMFVLL1FDR2dpL2lCZmFUZTgxb0hGeEtBc3BXdGdsYnZHaFJkYVYyenI1MVpYcFRLTU5LTUNkL1cyQXVObXlnbXk5aHpPQUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJEZ0I2R21rMWtXRFphbXFjMEZHRW1QUkUxNlVQZGV1M3lBVHBrbWM4MG92eE1aeUp5SWFTeXVBWHYreTUyczZ0WFhGQWFwcis1bjF1UVA4bERYSnBEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NjkzNzk4MDQ4OjMzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZiVEhheGtwdE9UbTNTTW5kaGpPTGlxRFAwYlpKWFZNWmFnTmRHZHArWXYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzI5NjM2NjZ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TOP-Md",
  ownername: process.env.OWNER_NAME || "TOPU",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
