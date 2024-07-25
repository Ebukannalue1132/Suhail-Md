const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348084374365";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_24_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA0MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwLFxuICAgICAgICAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM3LFxuICAgICAgICA1NixcbiAgICAgICAgMjExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNixcbiAgICAgICAgMTk4LFxuICAgICAgICAzNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDg4LFxuICAgICAgICA0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMSxcbiAgICAgICAgMixcbiAgICAgICAgNDAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDMxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0LFxuICAgICAgICA3MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICA2OSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODgsXG4gICAgICAgIDYxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAzMixcbiAgICAgICAgMzksXG4gICAgICAgIDAsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDcwLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlFjZjY4SVpnN0VtS0REVDJtWmkydWxOVU5KeU55ZmZpUCtKbk4rc1FIWmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA4NDM3NDM2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E2MDRCMzk5RTZFRDgxMEZBQzVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxOTQ5ODQxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA4NDM3NDM2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FBMDA4Qjg5RDE3Mzc5QUYxNjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxOTQ5ODQ1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImVCeWh4MWQzUXVlVHpfR0t3QXVJa2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWY5YzZmZDktNWRhZi00MzJhLTkwYmMtZTYwY2MxNjE0MDJlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MSxcbiAgICAgIDE2MSxcbiAgICAgIDExOSxcbiAgICAgIDU3LFxuICAgICAgNTAsXG4gICAgICA3LFxuICAgICAgMTg1LFxuICAgICAgNzIsXG4gICAgICA1NyxcbiAgICAgIDgzLFxuICAgICAgMTAxLFxuICAgICAgMTE4LFxuICAgICAgMjgsXG4gICAgICAzMyxcbiAgICAgIDEwLFxuICAgICAgMTAsXG4gICAgICA4NCxcbiAgICAgIDE2MixcbiAgICAgIDIyNSxcbiAgICAgIDc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDE2NixcbiAgICAgIDEzMCxcbiAgICAgIDIzOCxcbiAgICAgIDE4OCxcbiAgICAgIDE5OSxcbiAgICAgIDE4MCxcbiAgICAgIDIzLFxuICAgICAgMTc3LFxuICAgICAgMTcyLFxuICAgICAgNTAsXG4gICAgICAxNTUsXG4gICAgICAxMDgsXG4gICAgICAxOTEsXG4gICAgICAyMjAsXG4gICAgICAxMjgsXG4gICAgICAxOTUsXG4gICAgICAzLFxuICAgICAgNzAsXG4gICAgICAxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIVkJNRTVYRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA4NDM3NDM2NTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSGVucnkgTWFydGluXCIsXG4gICAgXCJsaWRcIjogXCIxMjY0MDU1NjgzOTM0MTc6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOTHJtdmtLRUltOWk3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhqVkRFVi9tQkpoallHMG5RelRGRWkyZGtLSXovcWhFVnNPVXZkTFNMWDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiajRLOGJKNUNIc3dCb3o1VCtEZmM4cXZ5cWlhbkJhb3RwRmpUWkZjMGRnbG1wbXE0YUgvWTJYODVYQWVEeWxUb1JVWU94QWFPL0Z3N1dOSkJoeUcyalE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYkhQYjNYbXMwcnZ4M1pKQWpjdituVVJKWU5FbmVJaWJLREZsQTI0QXVZbER1SEdOSkNtN1FiQkNWc29XVE5YanBvZ2hBWHcxNC9LL1R4Z1BxMG9vQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA4NDM3NDM2NTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTk0OTgzNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFuUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQW5RLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTHY1ZzdWRFRMRVo2TEVoZVlHaEhCOEpkcUtBWkgydEhnQnR0blIySUVIYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyOTM4NTQ5NzE0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE5NDk4MzgzMDJcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
