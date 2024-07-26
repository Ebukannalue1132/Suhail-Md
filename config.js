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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349070810971";




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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2349070810971,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_45_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDEyLFxuICAgICAgICA1NixcbiAgICAgICAgNzYsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDY3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwLFxuICAgICAgICA0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxODksXG4gICAgICAgIDY4LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjksXG4gICAgICAgIDUzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwLFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDcyLFxuICAgICAgICA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg4LFxuICAgICAgICA2MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzksXG4gICAgICAgIDcyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgwLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyLFxuICAgICAgICA0NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MixcbiAgICAgICAgODcsXG4gICAgICAgIDM2LFxuICAgICAgICA3NyxcbiAgICAgICAgOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NixcbiAgICAgICAgMjAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDUyLFxuICAgICAgICA3NixcbiAgICAgICAgODIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1Vk5WTXdWbG1SbENxZHJTUnkyckM3WWE2bE5YSEpGZkV3eUZ3bXBJc3I0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvNHJ3eWhnTlFacTBWTi1VRmNVOG5RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZjMGE0NmQ0LTQ3ZjUtNGQ1ZS04MGE3LWMxZGRlYWE2OTU4NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MyxcbiAgICAgIDEzMixcbiAgICAgIDc0LFxuICAgICAgNzcsXG4gICAgICA3OSxcbiAgICAgIDIwNSxcbiAgICAgIDE1NyxcbiAgICAgIDI1LFxuICAgICAgMTQ0LFxuICAgICAgMTAsXG4gICAgICA5LFxuICAgICAgMjM1LFxuICAgICAgMTIyLFxuICAgICAgNDEsXG4gICAgICAyMjgsXG4gICAgICAxMTksXG4gICAgICA1NCxcbiAgICAgIDIyNixcbiAgICAgIDQ1LFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODgsXG4gICAgICAxODIsXG4gICAgICAxMzYsXG4gICAgICAyMzgsXG4gICAgICAyMzksXG4gICAgICAxMTMsXG4gICAgICAxNTUsXG4gICAgICAxMjQsXG4gICAgICAxMTMsXG4gICAgICAyMjAsXG4gICAgICAxOCxcbiAgICAgIDE2NyxcbiAgICAgIDQ1LFxuICAgICAgMTY5LFxuICAgICAgMjA4LFxuICAgICAgMTcyLFxuICAgICAgMTEwLFxuICAgICAgMzgsXG4gICAgICAzNSxcbiAgICAgIDExMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1QkdERkpRWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA3MDgxMDk3MTo4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY2NTI0NTE0MzU3MzE5OjgxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04yMXZiNENFS1RqaTdVR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT29RNzlCVHdzaWVvT21DSnEvSWZYWGhURVBCU2VNb0NVcy9pVk9IUm0zQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvZEMvTlFCWFpxMWwwZ1RYMm9QRDZwZGFxQ21xN2g2NGZQanNVQzc5SVFMakxqczBZdHlmM29Za0FFdzJpbHJ4VitPeFJpN2NhbGxHcWJReEd5OXlEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvVEJqQkdsdlBjWFcxbkwzSDZYSCtLMVRtbmtCQkFrQkJxOEw1dTZvT0F5aGc2bWV5TlUrV1JOaFZ3dVo0ZTlMV0h4TjBuaWFubU1hbmtnVmR4UnpEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDcwODEwOTcxOjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxOTU0NzI3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRm1IXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGbUguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTYVE3dWF3aHgzNVBTazgrUXZsVFRmRUhNeGRIa243ZWo1QzZCdDA2REZzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY2NzkwMDYzNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxOTQ0MzcxNTYzXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Mr anonymous",
  ownername:process.env.OWNER_NAME|| "Mr anonymous",


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
