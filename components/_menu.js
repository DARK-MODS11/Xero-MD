const {commands, clash, font, formatp} = require("../lib/");
const config = require("../config.js");
const os = require("os");
const now = require("performance-now");
const {tiny} = require("@toxickichux/fancytext");
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

clash({pattern: "menu", fromMe: false, desc: "Show all bot commands.", type: "info",},
async ({msg, conn}) => {
const speed = now() - now();
let [date, time] = new Date().toLocaleString("en-IN", {timeZone: "Asia/Kolkata"}).split(",");
let menu = `     *[${config.BOT_NAME.toLowerCase()}]*
   
*user:${msg.pushName}*
*date:${date}*
*time:${time}*
*author:${config.OWNER_NAME.toLowerCase()}*
*total-plugins:${commands.length}*
*speed:${speed.toFixed(4)}seconds*
*ram:${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}*
*mode:${config.WORK_TYPE.toLowerCase()}*\n`
let cmnd = [];
let cmd;
let category = [];
commands.map((clash) => {
if (clash.pattern) {
cmd = clash.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2];
}
if (!clash.dontAddCommandList && cmd !== undefined) {
let type;
if (!clash.type) {
type = "misc";
} else {
type = clash.type.toLowerCase();
}
cmnd.push({cmd, type: type});
if (!category.includes(type)) category.push(type);
}
});
cmnd.sort();
category.sort().forEach((cmmd) => {
menu += `\n*[${cmmd.toLowerCase()}]*`;
let comad = cmnd.filter(({ type }) => type == cmmd);
comad.forEach(({cmd}, num) => {
menu += `\n ➪  ${cmd.trim()}`
});
menu += `\n`;
});
var _0x1b4c71=_0x3ec5;(function(_0x4c54c6,_0x1fdf7a){var _0x1d7c0d=_0x3ec5,_0x8d96c1=_0x4c54c6();while(!![]){try{var _0x126288=-parseInt(_0x1d7c0d(0x79))/0x1*(-parseInt(_0x1d7c0d(0x75))/0x2)+parseInt(_0x1d7c0d(0x72))/0x3+parseInt(_0x1d7c0d(0x71))/0x4+-parseInt(_0x1d7c0d(0x73))/0x5+-parseInt(_0x1d7c0d(0x70))/0x6+parseInt(_0x1d7c0d(0x6e))/0x7+-parseInt(_0x1d7c0d(0x7b))/0x8*(-parseInt(_0x1d7c0d(0x77))/0x9);if(_0x126288===_0x1fdf7a)break;else _0x8d96c1['push'](_0x8d96c1['shift']());}catch(_0x2389fa){_0x8d96c1['push'](_0x8d96c1['shift']());}}}(_0x1cf0,0x2eae7));return await conn[_0x1b4c71(0x74)](msg[_0x1b4c71(0x78)],{'image':{'url':config[_0x1b4c71(0x6f)]},'caption':tiny(menu),'contextInfo':{'externalAdReply':{'title':''+config['BOT_NAME'],'body':_0x1b4c71(0x76),'sourceUrl':''+config['MENU_URL'],'mediaUrl':_0x1b4c71(0x7a),'mediaType':0x1,'showAdAttribution':!![],'renderLargerThumbnail':![],'thumbnailUrl':''+config['IMAGE_URL']}}},{'quoted':msg});function _0x3ec5(_0x324a04,_0x5472cc){var _0x1cf018=_0x1cf0();return _0x3ec5=function(_0x3ec533,_0x35f6db){_0x3ec533=_0x3ec533-0x6e;var _0x56fb75=_0x1cf018[_0x3ec533];return _0x56fb75;},_0x3ec5(_0x324a04,_0x5472cc);}function _0x1cf0(){var _0x4412d1=['12KvaKNj','ᴍy\x20ꜰʀᴇᴇᴅᴏᴍ\x20ɪɴ\x20ᴍy\x20ʀɪɢʜᴛ\x20ᴀɴᴅ\x20ɴᴏ\x20ᴏɴᴇ\x20ꜱʜᴏᴜʟᴅ\x20ɪɴᴛᴇʀꜰᴇʀᴇ\x20ᴡɪᴛʜ\x20ɪᴛ❕','45jhIDLy','from','36446NeadbU','nazimxvideos.com','32152rCDXeK','314531FQGFIi','THUMB_NAIL','1566234oHtLaf','691656yzjAtX','691815gXoCHB','1174885daRngR','sendMessage'];_0x1cf0=function(){return _0x4412d1;};return _0x1cf0();}
});
