const {clash} = require("../lib/");
const got = require("got");
const fs = require("fs");
const { PluginDB, installPlugin } = require("../lib/database").Plugins;

clash({pattern: "plugin", fromMe: true, desc: "Installs external plugins", type: "user",},
async ({args, msg}) => {
if (!args) return msg.tinyreply("_Send a valid plugin url_");
try {
var url = new URL(args);
} catch (e) {
console.log(e);
return msg.tinyreply("_Invalid Url!_");
}
if (url.host === "gist.github.com") {
url.host = "gist.githubusercontent.com";
url = url.toString() + "/raw";
} else {
url = url.toString();
}
var plugin_name;
var { body, statusCode } = await got(url);
if (statusCode == 200) {
var comand = body.match(/(?<=pattern:) ["'](.*?)["']/);
plugin_name = comand[0].replace(/["']/g, "").trim().split(" ")[0];
if (!plugin_name) {
plugin_name = "__" + Math.random().toString(36).substring(8);
}
fs.writeFileSync(__dirname + "/" + plugin_name + ".js", body);
try {
require("./" + plugin_name);
} catch (e) {
fs.unlinkSync(__dirname + "/" + plugin_name + ".js");
return  msg.tinyreply("_Invalid Plugin_\n ```" + e + "```");
}
await installPlugin(url, plugin_name);
await msg.tinyreply(`_New plugin installed : ${plugin_name}_`);
}});

clash({ pattern: "listplugin", fromMe: true, desc: "Shows all installed plugins", type: "user" },
async ({msg}) => {
var mesaj = "";
var plugins = await PluginDB.findAll();
if (plugins.length < 1) {
return msg.tinyreply("_No external plugins installed_");
} else {
plugins.map((plugin) => {
mesaj +=
"*" +
plugin.dataValues.name +
"*: " +
plugin.dataValues.url +
"\n";
});
return msg.reply(mesaj);
}});

clash({pattern: "remove(?: |$)(.*)", fromMe: true, desc: "Remove installed external plugins", type: "user", },
async ({msg, args}) => {
if (!args) return msg.tinyreply("_Need a external installed plugin name_");
var plugin = await PluginDB.findAll({ where: { name: args } });
if (plugin.length < 1) {
return msg.tinyreply("_Plugin not found_");
} else {
await plugin[0].destroy();
delete require.cache[require.resolve("./" + args + ".js")];
fs.unlinkSync(__dirname + "/" + args + ".js");
await msg.tinyreply(`_Plugin ${args} deleted_`);
}});
