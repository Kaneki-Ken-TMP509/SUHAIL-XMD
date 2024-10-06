const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_32_10_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MixcbiAgICAgICAgODMsXG4gICAgICAgIDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNixcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICAyNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk0LFxuICAgICAgICA4MSxcbiAgICAgICAgNzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDc0LFxuICAgICAgICA2NyxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODksXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDUxLFxuICAgICAgICAzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDU2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA1NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MixcbiAgICAgICAgMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxODksXG4gICAgICAgIDc3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImVBbTFDL2N5V3dGL2JIdkNFMjUxbmtqeVE4bGk3Zkk0Q1I4MW8zaTAzMEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIngxRUplOExPVGFxcUZHelVSY2dON3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWFjZWExM2EtZWUyYS00YzA0LTk4MzQtODFiYzc0MTkwNDMzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzLFxuICAgICAgMTQyLFxuICAgICAgODUsXG4gICAgICAyMzIsXG4gICAgICAxMTksXG4gICAgICAxNzQsXG4gICAgICAxMTIsXG4gICAgICAxNDgsXG4gICAgICAyMDAsXG4gICAgICAxMTcsXG4gICAgICAxMTIsXG4gICAgICA3OSxcbiAgICAgIDExOSxcbiAgICAgIDEwNSxcbiAgICAgIDIxOCxcbiAgICAgIDE1MyxcbiAgICAgIDE3OSxcbiAgICAgIDEzNixcbiAgICAgIDE0OCxcbiAgICAgIDIwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzgsXG4gICAgICAyNTAsXG4gICAgICAxMDAsXG4gICAgICAxNTgsXG4gICAgICAxMjMsXG4gICAgICA0NCxcbiAgICAgIDMxLFxuICAgICAgMTI1LFxuICAgICAgMjAzLFxuICAgICAgMTQ0LFxuICAgICAgOTcsXG4gICAgICA0NSxcbiAgICAgIDEwMyxcbiAgICAgIDIwMCxcbiAgICAgIDM0LFxuICAgICAgMTA0LFxuICAgICAgNTYsXG4gICAgICAxNDMsXG4gICAgICAzNSxcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYMlpDVkRLWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3Njg4ODk0ODI5OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDA1ODAzNDIwNDc3OToxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLek12djhERU5lRGpMZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImxuNGhyM3BzYlpSSGtwWlNNdnBhL0x6bjl1Nno0NnFuRjlWTmQ0dnc4RXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ0dxL2NBeU1ocldVOWxzZkgyTG9KWlBhRnJvMXJxdGhEZjVRMDBsUkxQZHJCdlI0L0FlcUcydjMvZE5RUk15U0x6VUdxVVh2K3FPLzBkcGlXaXd0Q3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ3ZrUm9XbnBSbEJZSE4yWEp5NlplZGJJd3lYTHkrV29uODFteURsbDVJRWozZTB2aDBoWHdFb0gwbW91WDJVRW1ZR1p5U1ROUWNNSzVyT2w2WnFBQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3Njg4ODk0ODI5OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODI1MDMzMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUs2SVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSzZJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUUg1Qm9NZ1NGejhidWVvbzZxaFYwcWxKeDA2dHdnZlJJdlM2V0djMGJMbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDcyNjcwMjUyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjgyNTAzMzg1NDFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
