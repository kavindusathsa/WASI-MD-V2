//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUhtOVduSE9tUGEvY2s1aHdOUk1xV1dEVUlLbkErbW1kTEhxL3F0SVRXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0RiRkwwOXJqVHdxeXNqT1lDTS9NeFoxY0NSSmJFSk85TFJJRE5mVXkxND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTnRXSnViQTBzUVZSSE5neVNHNDhqeVVrOWRyMngyMmJqdXBNdmRHT0hNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwMWZmRm4xMHVjM3FiWnFCcnQybWxMWUppT0k2VGRKYUxGYVdHa2dhbldBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNJdWJ3Zmk1Rmo3cEN6QXgxOUdrcWcyWkJ3ZCtNd1dqWTFyUVpzRmlRbnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZXdnJ4NVhPbmVEd1k5OCs4S01WZk5YK0RJRjI2S1F1YVcxRTFCMTFYVEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkljOXNCMUREZ1J5QWRlQ1VPN3BLQW9lZWJxR3hHU0hyY2k3bXNRK2pYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1BUVEhSR1hvakM3UGoyNmIySHdDUWFVcS9FV3I3Wi9jU05FdGVDUGV5UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZqQjRJWGc4cHpXU2ZzZkRxSHZ0SW5rdzhGa0dtWlo2NFgvRUJhL1dVbDVNLzRTR3BKMFpEekR1djJGMFJlK0d2NDNROVVyZWVMSzkraHJNYjVndUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM4LCJhZHZTZWNyZXRLZXkiOiJGS2l2N1RndHFVZUMwb21hUnJDUGVBaU1WbDNPTG03bWdmTXpzRk8yWEZZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU1MDk3NDI3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNEQTg1NkNEOUEyNDJDMzYwRTY3RTZERjVBRjgwMDJCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk3NTc0ODJ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU1MDk3NDI3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjFGRjM2QzU5NTNCMkZCNTkyQzZBRkQyQkM0M0E3QkI4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk3NTc0ODN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImY4aklXcEpoU1ZPTnpSNVRjZVhCVUEiLCJwaG9uZUlkIjoiZWRjYjg1MDctM2VjYy00OTEzLTgzNzAtNTIwNTYwZWNlNzk5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ing2TERzU1FQMEFxOXlqTHRadnFvdkhMOVZVYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyeEtwekxzZEs4US9LSHFHdzZTUFdOazlUS289In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNFpCTU5WVlIiLCJtZSI6eyJpZCI6Ijk0NzU1MDk3NDI3OjkzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdlYJcbuKAolxu4oCiXG7igKJcbuKAolxu4oCiXG7igKJcbvCdlLhcbuKAolxu4oCiXG7igKJcbuKAolxu4oCiXG7igKJcbvCdlY1cbuKAolxu4oCiXG7igKJcbuKAolxu4oCiXG7igKJcbvCdlYBcbuKAolxu4oCiXG7igKJcbuKAolxu4oCiXG7wnZWQXG7igKJcbuKAolxu4oCiXG7igKJcbuKAolxu4oCiXG7wnZS4In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLWHh4ZHNDRUp2VmhiUUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJzN005RGtJSnRkbFo2N0oxZFQ0UWFaVGxRU3l4NjFoU1FyeFptSEE1VkZVPSIsImFjY291bnRTaWduYXR1cmUiOiJvL0ZDN1hCaU1NeWkxcklHbG9VQnEwMTY4K3ZKYWFQL3B1dVhDV3J5cURuYUdMRlg5bmdjRmRsYWRvZStwUk9XK0d2RXpvc0hHODBxeUI2WEcrTlZCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidXNaWWdLR0plcll6UnlTTkd0YU1wekE3elo3a3g1OEVQcDhHcmZzWlhoNEcvQW5PYnFVWFVrUTlrZkJJbExVRTE4VVI0cU4wOWR3ZlNsdWRjMzRIRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1NTA5NzQyNzo5M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiT3pQUTVDQ2JYWldldXlkWFUrRUdtVTVVRXNzZXRZVWtLOFdaaHdPVlJWIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NzU3NDgwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUd0SCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
