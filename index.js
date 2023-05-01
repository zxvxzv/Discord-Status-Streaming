const { Client } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');

const client = new Client({
    checkUpdate: false,
});

client.on('ready', () => {
	setInterval(() => {
	    const r = new Discord.RichPresence()
	        .setApplicationId('1089666122988650567')
	        .setType('STREAMING')
	        .setURL('https://zxvc.xyz')
	        .setState('zxvxzv')
	        .setName('zxvxzv-tools')
	        .setDetails('ZXVXZV-TOOLS')
	        .setAssetsLargeImage('https://media.discordapp.net/attachments/1089572008473407588/1095028840272765058/creds_pls_discovered_by_aly_on_We_Heart_It.gif')
	        .setAssetsLargeText(`Ping Server.... : ${Math.round(client.ws.ping)} ms`)
	        .setAssetsSmallImage('https://media.discordapp.net/attachments/1089572008473407588/1095021266525753504/20230410_232327.jpg')
	        .setAssetsSmallText('Bot')
	        .setAssetsSmallText('Bot1')
	        .addButton('__  ZXVXZV-TOOLS 3 $  __', 'https://zxvc.xyz/')
	        .addButton('__  ZXVXZV-SMS-PREMIUM 2 $  __', 'https://github.com/zxvxzv/ZXVXZV-SMS');
	    client.user.setActivity(r);
	}, 5000);
});

client.login("TOKEN");