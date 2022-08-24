import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, SelectMenuBuilder, AttachmentBuilder } from "discord.js";

var commandsList = '+player [Player] \n+faction [Faction] \n+members [Faction] \n+kingdom [Kingdom] \n+flags open \n+flags protected \n+flags altfac \n+worlds'

export function commandsEmbed() {
   return new EmbedBuilder()
  .setTitle('MassiveCraft Factions Bot')
  .setDescription('All the commands for the MassiveCraft Factions Bot')
  .setColor('#FFFFFF')
  .setURL('https://discord.gg/crmzgAM9bd')
  .setThumbnail('https://cdn.discordapp.com/attachments/953608699539259393/999737812612034580/unnamed-removebg-preview.png')
  .addFields(
    { name: "Commands", value: commandsList, inline: true }
  )
  .setFooter({ text: 'If you need any help with the bot reach out to Nj#0001 on discord', iconURL: `https://visage.surgeplay.com/bust/3eae23614df642fa9e39750ffc89df9e` })
}
