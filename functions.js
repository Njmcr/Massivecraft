import { Client, GatewayIntentBits, Partials, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, SelectMenuBuilder } from "discord.js";
import fetch from "node-fetch";

export function getButtons(count, length, previousPage, nextPage) {
  return new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setCustomId(previousPage)
        .setLabel('Previous Page')
        .setStyle(ButtonStyle.Primary)
        .setDisabled(count == 0),
      new ButtonBuilder()
        .setCustomId(nextPage)
        .setLabel('Next Page')
        .setStyle(ButtonStyle.Primary)
        .setDisabled(count == length - 1),
    );
};

export async function getEssalonia(EssaloniaList) {
  var date = Date.now();
  var EssaloniaData = `http://map.massivecraft.com/standalone/MySQL_update.php?world=essalonia&ts=${date}`;
  var essaloniaP = JSON.parse(JSON.stringify(await (await fetch(EssaloniaData)).json()));
  var essalonia1 = essaloniaP.players;
  var EssaloniaPlayers = [];
  if (essalonia1 == "") {
    EssaloniaList.push("No One is in !! this world");
  };

  for (let y in essalonia1) {
    EssaloniaPlayers.push({ 'key': y, 'name': essalonia1[y]['name'] });
  };

  for (var i = 0; i < EssaloniaPlayers.length; i++) {
    const playersList = essalonia1[EssaloniaPlayers[i]['key']]['name'];
    var PlayersList = playersList.replace(/<|span |style="|>|\/|color:/g, "").replace(/#|"/g, '@split@here!');
    if (essalonia1 != "") {
      EssaloniaList.push(PlayersList.split("@split@here!")[2]);
    }
  };
  return EssaloniaList;
};

export async function getEssa(EssaList) {
  var date = Date.now();
  var EssaData = `http://map.massivecraft.com/standalone/MySQL_update.php?world=essa&ts=${date}`;
  var essaP = JSON.parse(JSON.stringify(await (await fetch(EssaData)).json()));
  var essa1 = essaP.players;
  if (essa1 == "") {
    EssaList.push("No One is in !! this world");
  }

  var EssaPlayers = [];

  for (let y in essa1) {
    EssaPlayers.push({ 'key': y, 'name': essa1[y]['name'] });
  };

  for (var i = 0; i < EssaPlayers.length; i++) {
    const playersList = essa1[EssaPlayers[i]['key']]['name'];
    var PlayersList = playersList.replace(/<|span |style="|>|\/|color:/g, "").replace(/#|"/g, '@split@here!');
    if (essa1 != "") {
      EssaList.push(PlayersList.split("@split@here!")[2]);
    }
  };
  return EssaList;
};


export async function getIthania(IthaniaList) {
  var date = Date.now();
  var IthaniaData = `http://map.massivecraft.com/standalone/MySQL_update.php?world=ithania&ts=${date}`;
  var ithaniaP = JSON.parse(JSON.stringify(await (await fetch(IthaniaData)).json()));
  var ithania1 = ithaniaP.players;
  if (ithania1 == "") {
    IthaniaList.push("No One is in !! this world");
  }

  var ithaniaPlayers = [];

  for (let y in ithania1) {
    ithaniaPlayers.push({ 'key': y, 'name': ithania1[y]['name'] });
  };

  for (var i = 0; i < ithaniaPlayers.length; i++) {
    const playersList = ithania1[ithaniaPlayers[i]['key']]['name'];
    var PlayersList = playersList.replace(/<|span |style="|>|\/|color:/g, "").replace(/#|"/g, '@split@here!');
    if (ithania1 != "") {
      IthaniaList.push(PlayersList.split("@split@here!")[2]);
    }
  };
  return IthaniaList;
}


export async function getRift(RiftList) {
  var date = Date.now();
  var RiftData = `http://map.massivecraft.com/standalone/MySQL_update.php?world=rift&ts=${date}`;
  var RiftP = JSON.parse(JSON.stringify(await (await fetch(RiftData)).json()));
  var Rift1 = RiftP.players;
  if (Rift1 == "") {
    RiftList.push("No One is in !! this world");
  }

  var RiftPlayers = [];

  for (let y in Rift1) {
    RiftPlayers.push({ 'key': y, 'name': Rift1[y]['name'] });
  };

  for (var i = 0; i < RiftPlayers.length; i++) {
    const playersList = Rift1[RiftPlayers[i]['key']]['name'];
    var PlayersList = playersList.replace(/<|span |style="|>|\/|color:/g, "").replace(/#|"/g, '@split@here!');
    if (Rift1 != "") {
      RiftList.push(PlayersList.split("@split@here!")[2]);
    }
  };
  return RiftList;
}

export async function getMarket(MarketList) {
  var date = Date.now();
  var MarketData = `http://map.massivecraft.com/standalone/MySQL_update.php?world=rift&ts=${date}`;
  var MarketP = JSON.parse(JSON.stringify(await (await fetch(MarketData)).json()));
  var Market1 = MarketP.players;
  if (Market1 == "") {
    MarketList.push("No One is in !! this world");
  }

  var MarketPlayers = [];

  for (let y in Market1) {
    MarketPlayers.push({ 'key': y, 'name': Market1[y]['name'] });
  };

  for (var i = 0; i < MarketPlayers.length; i++) {
    const playersList = Market1[MarketPlayers[i]['key']]['name'];
    var PlayersList = playersList.replace(/<|span |style="|>|\/|color:/g, "").replace(/#|"/g, '@split@here!');
    if (Market1 != "") {
      MarketList.push(PlayersList.split("@split@here!")[2]);
    }
  };
  return MarketList;
}

export async function getRegalia(RegaliaList) {
  var date = Date.now();
  var RegaliaData = `http://map.massivecraft.com/standalone/MySQL_update.php?world=regaliav5&ts=${date}`;
  var regaliaP = JSON.parse(JSON.stringify(await (await fetch(RegaliaData)).json()));
  var regalia1 = regaliaP.players;
  if (regalia1 == "") {
    RegaliaList.push("No One is in !! this world");
  }

  var regaliaPlayers = [];

  for (let y in regalia1) {
    regaliaPlayers.push({ 'key': y, 'name': regalia1[y]['name'] });
  };

  for (var i = 0; i < regaliaPlayers.length; i++) {
    const playersList = regalia1[regaliaPlayers[i]['key']]['name'];
    var PlayersList = playersList.replace(/<|span |style="|>|\/|color:/g, "").replace(/#|"/g, '@split@here!');
    if (regalia1 != "") {
      RegaliaList.push(PlayersList.split("@split@here!")[2]);
    }
  };
  return RegaliaList;
}

export async function getCreative(CreativeList) {
  var date = Date.now();
  var creativeData = `http://map.massivecraft.com/standalone/MySQL_update.php?world=creative1&ts=${date}`;
  var creativeP = JSON.parse(JSON.stringify(await (await fetch(creativeData)).json()));
  var creative1 = creativeP.players;
  if (creative1 == "") {
    CreativeList.push("No One is in !! this world");
  }


  var creativePlayers = [];

  for (let y in creative1) {
    creativePlayers.push({ 'key': y, 'name': creative1[y]['name'] });
  };

  for (var i = 0; i < creativePlayers.length; i++) {
    const playersList = creative1[creativePlayers[i]['key']]['name'];
    var PlayersList = playersList.replace(/<|span |style="|>|\/|color:/g, "").replace(/#|"/g, '@split@here!');
    if (creative1 != "") {
      CreativeList.push(PlayersList.split("@split@here!")[2]);
    }
  };
  return CreativeList;
}
