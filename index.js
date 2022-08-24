import fetch from "node-fetch";
import { Client, GatewayIntentBits, Partials, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, SelectMenuBuilder, AttachmentBuilder } from "discord.js";
import { commandsEmbed } from './embeds.js';
import { getButtons, getEssalonia, getEssa, getIthania, getRift, getMarket, getRegalia, getCreative } from './functions.js';

const bot = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
  'partials': [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction]
});

var outputChannelID = '998889338475655188';

bot.on('ready', () => {
  console.log(`The Discord bot ${bot.user.username} is ready!`);
  bot.channels.cache.get(outputChannelID).send(`The Discord bot ${bot.user.username} is ready!`);
  bot.channels.cache.get(outputChannelID).send('+reload');
});

bot.login(process.env.token)

var prefix = "+"

var helparr = [ "?" , "help" , "commands" ];

var descarr = [];
var index = [];
var index1 = [];
var index2 = [];
var index3 = [];
var index69 = [];
var WinterheimFactionsArray = [];
var kingdomsArr = [];
var factionsArr = [];
var SiegeArr = [];
var openfactions = [];
var protectedfactions = [];
var altfacs = [];
var AllFactions = {
  JsonData: []
};
var KingdomsIndex = AllFactions.JsonData;

let essalonia = 'http://map.massivecraft.com/standalone/MySQL_markers.php?marker=_markers_/marker_essalonia.json';

let Essa = 'http://map.massivecraft.com/standalone/MySQL_markers.php?marker=_markers_/marker_essa.json';

let Ithania = 'https://map.massivecraft.com/standalone/MySQL_markers.php?marker=_markers_/marker_ithania.json';

bot.on('messageCreate', async (message) => {
  if (!message.content.startsWith(prefix)) return;
  if (message.channel.id === outputChannelID) {
    if ((message.content.replace(prefix, "")) === 'reload') {

      descarr.length = 0;
      index.length = 0;
      index1.length = 0;
      index2.length = 0;
      index3.length = 0;
      index69.length = 0;
      WinterheimFactionsArray.length = 0;
      kingdomsArr.length = 0;
      factionsArr.length = 0;
      SiegeArr.length = 0;
      openfactions.length = 0;
      protectedfactions.length = 0;
      altfacs.length = 0;

      
      let obj = JSON.parse(JSON.stringify(await (await fetch(essalonia)).json()));
      let obj1 = JSON.parse(JSON.stringify(await (await fetch(Essa)).json()));
      let obj2 = JSON.parse(JSON.stringify(await (await fetch(Ithania)).json()));

      const result = obj.sets.factions_markerset.areas;
      const result1 = obj1.sets.factions_markerset.areas;
      const result2 = obj2.sets.factions_markerset.areas;

      for (let y in result) {
        index.push({ 'key': y, 'desc': result[y]['desc'] });
      };

      for (let y in result1) {
        index1.push({ 'key': y, 'desc': result1[y]['desc'] });
      };

      for (let y in result2) {
        index2.push({ 'key': y, 'desc': result2[y]['desc'] });
      };

      for (var i = 0; i < index.length; i++) {
        const desc = result[index[i]['key']]['desc']
        var descobj = {
          desc
        };
        descarr.push(descobj);
      };

      for (var i = 0; i < index1.length; i++) {
        const desc = result1[index1[i]['key']]['desc']
        var descobj = {
          desc
        };
        descarr.push(descobj);

      };

      for (var i = 0; i < index2.length; i++) {
        const desc = result2[index2[i]['key']]['desc']
        var descobj = {
          desc
        };
        descarr.push(descobj);

      };

      for (let y in descarr) {
        index69.push({ 'key': y, 'desc': descarr[y]['desc'] });
      };

      for (var i = 0; i < index69.length; i++) {
        const desc = descarr[index69[i]['key']]['desc']

        var b1 = desc.replace(/span|\/|>|<|style|=|"|font|-|weight|div|size|150%|105%|italic|;|110%|bold|\n|/g, "");
        var b2 = b1.replace(/::/g, ":").split(/br  :/g);

        var Faction = b2[0].replace(/ :/g, "");
        var Kingdom = b2[1];
        var Leader = b2[3].replace(/br /g, "").split(": ")[1];
        var Members = b1.split(/br br/g)[1].replace(/br  :/g, "\n").replace(/  :/g, "");
        var MemberCount = b2[b2.length - 4].split(": ")[1];
        var Age = b2[b2.length - 3].split(": ")[1];
        var Bank = b2[b2.length - 2].replace(/br /g, "").split(": ")[1];
        var Flags = b2[b2.length - 1].replace(/Flags:br|\s/g, "");
        var faction = Faction.toLowerCase();
        var kingdom = Kingdom.toLowerCase();
        var members = Members.toLowerCase();

        var o2 = {
          "FactionData": [
            {
              "Faction": Faction,
              "Kingdom": Kingdom,
              "Leader": Leader,
              "Members": Members,
              "MemberCount": MemberCount,
              "Age": Age,
              "Bank": Bank,
              "Flags": Flags,
              "faction": faction,
              "kingdom": kingdom,
              "members": members
            }
          ]
        };
        AllFactions.JsonData.push(o2);
        factionsArr.push(o2.FactionData[0].faction);
        if (Flags.includes("siegezone")) {
          SiegeArr.push(o2.FactionData[0].Faction);
        };
        if (Kingdom === "Kingdom of Winterheim") {
          WinterheimFactionsArray.push(Faction)
        }
      };


      for (let y in KingdomsIndex) {
        index3.push({ 'key': y, 'FactionData': KingdomsIndex[y]['FactionData'] });
      };

      for (var i = 0; i < index3.length; i++) {
        const parsedData = KingdomsIndex[index3[i]['key']]['FactionData']

        var Kingdoms = (parsedData[0].kingdom).replace(/kingdom of /g, "");
        kingdomsArr.push(Kingdoms);

      }
      const embed = new EmbedBuilder()
        .setTitle("Done")

      message.reply({ embeds: [embed] });
    }
  }
});


bot.on('messageCreate', async (message) => {
  if (!message.content.startsWith(prefix)) return;
  if (message.channel.id === outputChannelID) {
    const msg = ((message.content.toLowerCase()).replace(prefix, "")).split(" ");
    if (msg[0] === "members") {
      for (var i = 0; i < index3.length; i++) {
        const parsedData = KingdomsIndex[index3[i]['key']]['FactionData'];
        if (msg[1] === parsedData[0].faction) {
          if (parsedData[0].Leader != "0") {
            var members = parsedData[0].Members.replace(/!@! /g, '\n').replace(/\s\s/g, ", ");
          }
        }
      }
      if (typeof members !== "undefined") {
        const embed = new EmbedBuilder()
          .setTitle(`${msg[1]} Members`)
          .setDescription(members)

        message.reply({ embeds: [embed] });
      }
    }
    if (msg[0] === "kingdom") {
      var KingdomsArray = kingdomsArr.filter(function(item, pos) {
        return kingdomsArr.indexOf(item) == pos;
      })
      if (msg.length === 1) {
        const embed = new EmbedBuilder()
          .setTitle(`Kingdoms`)
          .setDescription((JSON.stringify(`${KingdomsArray}`)).replace(/\[|"|]/g, "").replace(/,/g, "\n"))

        message.reply({ embeds: [embed] });
      }
      var KingdomsArr = [];
      var KingdomsArr2 = [];
      var k1 = [];
      if (KingdomsArray.includes(msg[1])) {
        for (var i = 0; i < index3.length; i++) {
          const parsedData = KingdomsIndex[index3[i]['key']]['FactionData'];
          if ((parsedData[0].kingdom).replace(/kingdom of /g, "") === msg[1]) {
            KingdomsArr.push(parsedData[0].Faction);
          }
        }
        var KingdomsArr1 = KingdomsArr.filter(function(item, pos) {
          return KingdomsArr.indexOf(item) == pos;
        })
        const embed = new EmbedBuilder()
          .setTitle(`${msg[1]}'s Factions'`)
          .setDescription((JSON.stringify(KingdomsArr1)).replace(/\[|"|]/g, "").replace(/,/g, "\n"))

        message.reply({ embeds: [embed] });
      }
      if (factionsArr.includes(msg[1])) {
        for (var i = 0; i < index3.length; i++) {
          const parsedData = KingdomsIndex[index3[i]['key']]['FactionData'];
          if (msg[1] === parsedData[0].Faction) {
            k1.push((parsedData[0].Kingdom).replace(/Kingdom of /g, ""));
          }
        }
        if (KingdomsArray.includes(k1[0])) {
          for (var i = 0; i < index3.length; i++) {
            const parsedData = KingdomsIndex[index3[i]['key']]['FactionData'];
            if ((parsedData[0].Kingdom).replace(/Kingdom of /g, "") === k1[0]) {
              KingdomsArr2.push(parsedData[0].Faction);
            }
          }
          var KingdomsArr3 = KingdomsArr2.filter(function(item, pos) {
            return KingdomsArr2.indexOf(item) == pos;
          })
          const embed = new EmbedBuilder()
            .setTitle(`${k1[0]}'s Factions`)
            .setDescription((JSON.stringify(KingdomsArr3)).replace(/\[|"|]/g, "").replace(/,/g, "\n"))

          message.reply({ embeds: [embed] });
        }
      }
    }
    if (msg[0] === 'faction') {
      if (factionsArr.includes(msg[1])) {
        for (var i = 0; i < index3.length; i++) {
          const parsedData = KingdomsIndex[index3[i]['key']]['FactionData'];
          if (msg[1] === parsedData[0].faction) {
            if (parsedData[0].Leader != "0") {
              var members = parsedData[0].Members.replace(/!@! /g, '\n').replace(/\s\s/g, ", ");
              var Faction = parsedData[0].Faction;
              var Kingdom = parsedData[0].Kingdom;
              var Age = parsedData[0].Age;
              var Bank = parsedData[0].Bank;
            }
          }
        }
        const embed = new EmbedBuilder()
          .addFields(
            { name: "Faction", value: "Kingdom\nBank\nAge\nMembers", inline: true },
            { name: Faction, value: Kingdom + '\n' + Age + '\n' + Bank + '\n' + members, inline: true },
          )

        message.reply({ embeds: [embed] });
      }
    }
    if (msg[0] === 'siege') {
      var sieges = (JSON.stringify(SiegeArr)).replace(",", "\n").replace(/\[|"|]/g, "");
      if (sieges === "") {
        const embed = new EmbedBuilder()
          .setTitle('Current Sieges List')
          .setDescription(`There are no active sieges right now!`)

        message.reply({ embeds: [embed] });
      }
      if (sieges != "") {
        const embed = new EmbedBuilder()
          .setTitle('Current Sieges List')
          .setDescription(`${sieges}`)

        message.reply({ embeds: [embed] });
      }
    }
    if (msg[0] === "player") {
      for (var i = 0; i < index3.length; i++) {
        const parsedData = KingdomsIndex[index3[i]['key']]['FactionData'];
        if (parsedData[0].members.includes(msg[1])) {
          var members = parsedData[0].Members.replace(/!@! /g, '\n').replace(/\s\s/g, ", ");
          var Faction = parsedData[0].Faction;
          var Kingdom = parsedData[0].Kingdom;
          var Age = parsedData[0].Age;
          var Bank = parsedData[0].Bank;
        }
      }
      if (typeof Faction !== "undefined") {
        const embed = new EmbedBuilder()
          .addFields(
            { name: "Faction", value: "Kingdom\nBank\nAge\nMembers", inline: true },
            { name: Faction, value: Kingdom + '\n' + Age + '\n' + Bank + '\n' + members, inline: true },
          )

        message.reply({ embeds: [embed] });
      }
    }
    if(helparr.includes(msg[0])) {
      message.reply({ embeds: [commandsEmbed(prefix)] });
    }
  }
});

var embedarr = [];
var count = 0;

bot.on('messageCreate', async (message) => {
  if (!message.content.startsWith("+")) return;
  if (message.channel.id === outputChannelID) {
    const msg = ((message.content.toLowerCase()).replace("+", "")).split(" ");
    if (msg[0] === "worlds") {
      var EssaloniaList = [];
      var EssaList = [];
      var IthaniaList = [];
      var RiftList = [];
      var MarketList = [];
      var RegaliaList = [];
      var CreativeList = [];

      await getEssalonia(EssaloniaList);
      await getEssa(EssaList);
      await getIthania(IthaniaList);
      await getRift(RiftList);
      await getMarket(MarketList);
      await getRegalia(RegaliaList);
      await getCreative(CreativeList);

      var essaloniastr = JSON.stringify(EssaloniaList).replace(/\[|]|"/g, "").replace(/,|!!/g, "\n");
      var essastr = JSON.stringify(EssaList).replace(/\[|]|"/g, "").replace(/,|!!/g, "\n");
      var ithaniastr = JSON.stringify(IthaniaList).replace(/\[|]|"/g, "").replace(/,|!!/g, "\n");
      var riftstr = JSON.stringify(RiftList).replace(/\[|]|"/g, "").replace(/,|!!/g, "\n");
      var marketstr = JSON.stringify(MarketList).replace(/\[|]|"/g, "").replace(/,|!!/g, "\n");
      var regaliastr = JSON.stringify(RegaliaList).replace(/\[|]|"/g, "").replace(/,|!!/g, "\n");
      var creativestr = JSON.stringify(CreativeList).replace(/\[|]|"/g, "").replace(/,|!!/g, "\n");

      embedarr.length = 0;
      count = 0;

      const embed1 = new EmbedBuilder()
        .setTitle("Players In Survival Worlds")
        .setColor("#FFFFFF")
        .setDescription("Page 1")
        .addFields(
          { name: "Essalonia", value: essaloniastr, inline: true },
          { name: "Essa", value: essastr, inline: true },
          { name: "Ithania", value: ithaniastr, inline: true }
        );


      const embed2 = new EmbedBuilder()
        .setTitle("Players In Worlds")
        .setColor("#FFFFFF")
        .setDescription("Page 2")
        .addFields(
          { name: "Rift", value: riftstr, inline: true },
          { name: "Market", value: marketstr, inline: true }
        );

      const embed3 = new EmbedBuilder()
        .setTitle("Players In Worlds")
        .setColor("#FFFFFF")
        .setDescription("Page 3")
        .addFields(
          { name: "Creative", value: creativestr, inline: true },
          { name: "Regalia", value: regaliastr, inline: true }
        );

      embedarr.push(embed1);
      embedarr.push(embed2);
      embedarr.push(embed3);
      
      if (msg.length == 1) {
        var previousPage = "worldspreviouspage";
        var nextPage = "worldsnextpage"
        message.reply({ ephemeral: true, embeds: [embedarr[count]], components: [getButtons(count, embedarr.length, previousPage, nextPage)] });
      };
    }
  }
});


bot.on('interactionCreate', async (i) => {
  if (i.customId == "worldsnextpage") {
    count += 1
    i.update({
      embeds: [embedarr[count]],
      components: [getButtons(count, embedarr.length, "worldspreviouspage", "worldsnextpage")]
    })
  } else if (i.customId == "worldspreviouspage") {
    count -= 1
    i.update({
      embeds: [embedarr[count]],
      components: [getButtons(count, embedarr.length, "worldspreviouspage", "worldsnextpage")]
    })
  }
});
