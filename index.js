const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

async function login() {
  try {
    await client.login(process.env.TOKEN);
    console.log('\x1b[36m[ LOGIN ]\x1b[0m', `\x1b[32mLogged in as: ${client.user.tag} ✅\x1b[0m`);
    console.log('\x1b[36m[ INFO ]\x1b[0m', `\x1b[35mBot ID: ${client.user.id} \x1b[0m`);
    console.log('\x1b[36m[ INFO ]\x1b[0m', `\x1b[34mConnected to ${client.guilds.cache.size} server(s) \x1b[0m`);

    // Menghapus status dengan mengatur status ke "idle" tanpa aktivitas
    client.user.setPresence({
      activities: [],
      status: 'invisible', // Pilihan: 'online', 'idle', 'dnd', atau 'invisible'
    });

    console.log('\x1b[33m[ STATUS ]\x1b[0m', 'Bot status cleared.');
  } catch (error) {
    console.error('\x1b[31m[ ERROR ]\x1b[0m', 'Failed to log in:', error);
    process.exit(1);
  }
}

// Ketika bot siap
client.once('ready', () => {
  console.log('\x1b[36m[ READY ]\x1b[0m', 'Bot is online!');
});

// Login ke Discord
login();
