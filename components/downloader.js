clash({pattern: "insta", fromMe: false, desc: "Download posts from Instagram", type: "downloader",},
async ({args, msg, conn}) => {
if(!args) return await msg.tinyreply("*_Give me insta  url_*");
{let {key} = await mg.tinyreply("_Downloading_")
  try{
var res = await axios.get(`https://api/url=${args}`)
let response = await res.data
for (let i of response.data) {
var type = i.type
await conn.sendMsg(m.from,{[type]:{url:i.url}},{caption:`_*Downloading ${response.data.title}*_\n\n*_BY SUPERIOR_|| XERO-MD*`},{quoted:msg});
return await msg.editmsg("_Successfull!_", key);
}
} catch (e) {
msg.editmsg("_Error!_", key);
}
}
});

clash(
  { 
    pattern: "yta", 
    fromMe: false, 
    desc: "Download YouTube videos", 
    type: "downloader", 
  }, 
  async ({ args, msg, conn }) => {
    if (!args) return await msg.tinyreply("_Give me a youtube URL_");
    let { key } = await msg.tinyreply("_Downloading_");
   try {  
     await conn.sendMessage(msg.from, { audio: { url: `https://api.url=${args}`}},(msg.from,{audio: songbuff, mimetype : 'audio'} , { quoted : msg})); 
     return await msg.editmsg("_Successful!_", key);
   } catch (e) {
      msg.editmsg("_Error!_", key);
    }
  }
);


clash(
  { 
    pattern: "ytv", 
    fromMe: false, 
    desc: "Download YouTube videos", 
    type: "downloader", 
  }, 
  async ({ args, msg, conn }) => {
    if (!args) return await msg.tinyreply("_Give me a YouTube URL_");
    let { key } = await msg.tinyreply("_Downloading_");
    try {
      await conn.sendMessage(msg.from, { video: { url: `https://api.url=${args}` } }, { quoted: msg });
      return await msg.editmsg("_Successful!_", key);
    } catch (e) {
      msg.edit("_Error!_", key);
    }
  }
);

clash({pattern: "song", fromMe: false, desc: "youtube song download", type: "downloader",},
async ({msg, args, conn}) => {
if (!args) return await msg.tinyreply("_Enter A song name_");
const res = await axios.get(`https://api/api/=${args}`)
    let response = await res.data
    const songbuff = await (await fetch(`${response.data.downloadUrl}`)).buffer()
 let { key } = await msg.tinyreply("_Downloading_");
try{
  await conn.sendMessage(msg.from,{audio: songbuff, mimetype : 'audio/mpeg'} , { quoted : msg});
   return await msg.editmsg("_Successfull!_", key);
    } catch (e) {
          m.edit("_Error!_", key);
}
}
);
