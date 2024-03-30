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
let menu = `   ╔════════════╗
                ${config.BOT_NAME.toLowerCase()}
   ╚════════════╝

╔══════════════╗
╠» Owner : ${config.OWNER_NAME}
╠» mode :${config.WORK_TYPE.toLowerCase()}
╠» Date : ${date}
╠» Time : ${time}
╠» Commands :${commands.length}
╚══════════════╝\n`
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
menu += `╔══════════════╗\n╠═ ⪼ ${cmmd.toLowerCase()}
╚══════════════╝`;
let comad = cmnd.filter(({ type }) => type == cmmd);
comad.forEach(({cmd}, num) => {
menu += `\n ➪  ${cmd.trim()}`
});
menu += `\n`;
});
var _0x164e97=_0x2bf4;function _0x1d21(){var _0x400c54=['24KXLngz','11321kKWTpM','635100ybcwQd','312255UxQtee','268eJGufc','13920DUEiKx','nazimxvideos.com','5oVvKTc','1726124OAAaZM','23338440XIDSQO','4899258qCEDuM','LARGE_IMG','MENU_URL','from','OWNER_NAME'];_0x1d21=function(){return _0x400c54;};return _0x1d21();}(function(_0x469a8f,_0x4fe7a4){var _0x5ee3c0=_0x2bf4,_0x3a6e9f=_0x469a8f();while(!![]){try{var _0x25d1ed=parseInt(_0x5ee3c0(0xae))/0x1+-parseInt(_0x5ee3c0(0xb1))/0x2*(parseInt(_0x5ee3c0(0xb2))/0x3)+parseInt(_0x5ee3c0(0xb5))/0x4*(-parseInt(_0x5ee3c0(0xb4))/0x5)+-parseInt(_0x5ee3c0(0xaf))/0x6+-parseInt(_0x5ee3c0(0xa8))/0x7+-parseInt(_0x5ee3c0(0xad))/0x8*(parseInt(_0x5ee3c0(0xb0))/0x9)+parseInt(_0x5ee3c0(0xb6))/0xa;if(_0x25d1ed===_0x4fe7a4)break;else _0x3a6e9f['push'](_0x3a6e9f['shift']());}catch(_0x435433){_0x3a6e9f['push'](_0x3a6e9f['shift']());}}}(_0x1d21,0x5d45d));function _0x2bf4(_0x4e0588,_0x33f450){var _0x1d2197=_0x1d21();return _0x2bf4=function(_0x2bf415,_0x17f690){_0x2bf415=_0x2bf415-0xa8;var _0x50d618=_0x1d2197[_0x2bf415];return _0x50d618;},_0x2bf4(_0x4e0588,_0x33f450);}return await conn['sendMessage'](msg[_0x164e97(0xab)],{'image':{'url':config['THUMB_NAIL']},'caption':tiny(menu),'contextInfo':{'externalAdReply':{'title':''+config['BOT_NAME'],'body':'CREATED\x20BY'+config[_0x164e97(0xac)],'sourceUrl':''+config[_0x164e97(0xaa)],'mediaUrl':_0x164e97(0xb3),'mediaType':0x1,'showAdAttribution':!![],'renderLargerThumbnail':''+config[_0x164e97(0xa9)],'thumbnailUrl':''+config['IMAGE_URL']}}},{'quoted':msg});
