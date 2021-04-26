const Discord = require("discord.js");
const fs = require("fs");
const { disconnect, uptime } = require("process");
const client = new Discord.Client();

const token = "(My bot's token)"

const version = "0.3.0";
const bot_name = "Calliope";
const program_name = "calliope";
const events = "2";
const loops = "0";
const error_report = "808849065512796182"; // Can be replaced with any channel for testing purposes

client.on("ready", async () => {
    console.log(
        `BOT ${client.user.tag} (${client.user.id}) started successfully. Hooking into error reporting channel.`
    );

    const embed = new Discord.MessageEmbed()
        .setColor(colors["green"])
        .setTitle("Hooked into error reporting channel!")
        .setDescription(
            `\`\`\`yaml\nRunning: ${program_name}\nVersion: ${version}\n\nCommands: ${Object.keys(commands).length}\nEvents: ${events}\nLoops: ${loops}\n\`\`\``
        );

    error_reporting_channel = await client.channels.fetch(error_report);
    await error_reporting_channel.send(embed);

    await client.user.setPresence({
        activity: { name: db["status"] },
        status: db["visibility"],
    });
    console.log(
        `BOT ${client.user.tag} (${client.user.id}) hooked into error reporting channel. Good to go.`
    );
});

client.login(token);

//continue tests:
