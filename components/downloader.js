const { clash, getBuffer } = require("../lib/");
const fetch = require("node-fetch");
const axios = require("axios");
const { fromBuffer } = require("file-type");

async function FiletypeFromUrl(url) {
  const buffer = await getBuffer(url);
  const out = await fromBuffer(buffer);
  let type;
  if (out) {
    type = out.mime.split("/")[0];
  }
  return { type, buffer };
}


clash({pattern: "insta", fromMe: false, desc: "Download posts from Instagram", type: "downloader",},
async ({args, msg, conn}) => {
if(!args) return await msg.tinyreply("*_Enter instagram post url!_*");
let {key} = await msg.tinyreply("_*Please Wait Downloading...*_");
try{
let sample = await axios.get(`https://upper-romy-inrl-bot.koyeb.app/api/download/insta?url=${args}&apikey=zeta007`);
let zeta = sample.data.result[0].url;
let ty = await FiletypeFromUrl(zeta);
let type = ty.type;
await conn.sendMessage(msg.from,{[type]:{url:zeta}},{quoted:msg});
return await msg.editmsg("_*Uploaded By FINU-BOT*_", key);
}catch(e){
return msg.editmsg("_*Not Available*_", key);
}
});
