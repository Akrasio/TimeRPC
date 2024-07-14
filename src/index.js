//require the module of the richpresence
var RPC = require("discord-rpc");
var rpc = new RPC.Client({
  transport: "ipc"
});

//thats just decoration
require("colors");
//A Map for us | for the cooldowns ;)
let map = new Map();

// Midnight of the current start day?
const event = new Date();
event.setHours(00, 00, 00)

//once the rich presence got ready, set it
rpc.on("ready", () => {
  //set the rich presence
  set_rpc()
  //LOOP FOR FOR each 120 seconds
  setInterval(() => {
    set_rpc();
  }, 60e3)

  //log that it's ready
  try {
    const stringlength = 69;
    console.log("\n")
    console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + `  Discord Rich Presence Ready | made by Akrasio`.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length - `  Discord Rich Presence Ready | made by Akrasio`.length) + "┃".bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + `  |-> ${`Displaying for: `.magenta}@${rpc.user.username}`.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length - `  |-> Displaying for: ${rpc.user.username}#${rpc.user.discriminator}`.length) + "┃".bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightGreen)
    console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.brightGreen)
  } catch {
    /* */
  }
});


//login to the rich presence tool
rpc.login({
  clientId: "1236189495636787230", // Replace With YOUR Application ID
});

//function for calling the rich presence
async function set_rpc(option) {
  //if not on cooldown
  if (!map.has("rpccooldown")) {
    //set the cooldown
    map.set("rpccooldown")
    if (option == "re") {
      //log it in the console
      try {
        const stringlength = 69;
        console.log("\n")
        console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.brightGreen)
        console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightGreen)
        console.log(`     ┃ `.bold.brightGreen + `  Discord Rich Presence Changed - Reapplied | made by Akrasio`.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length - `  Discord Rich Presence Changed - Reapplied | made by Akrasio`.length) + "┃".bold.brightGreen)
        console.log(`     ┃ `.bold.brightGreen + `  |-> ${`Displaying for: `.magenta}${rpc.user.username}#${rpc.user.discriminator}`.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length - `  |-> Displaying for: ${rpc.user.username}#${rpc.user.discriminator}`.length) + "┃".bold.brightGreen)
        console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightGreen)
        console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.brightGreen)
      } catch {
        /* */
      }
    }
    //set the activity
    const nowTime = new Date();
    const times = nowTime.getHours();
    let image = "https://cdn.discordapp.com/emojis/1183044387358384259.gif"; // Replace with your own image/gif
    if (times == 0) image = "clock";
    await rpc.setActivity({
      "details": "━━━━━━━━━━",
      "state": "Current Local Time:",
      "largeImageKey": image,
      "largeImageText": "(Local Time):",
      "startTimestamp": event
    })
    //delete the cooldown after some 15000ms (15 seconds)
    setTimeout(() => {
      map.delete("rpccooldown");
    }, 15000)
  }
  //if on cooldown
  else {
    //log information
    try {
      const stringlength = 69;
      console.log("\n")
      console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.brightRed)
      console.log(`     ┃ `.bold.brightRed + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightRed)
      console.log(`     ┃ `.bold.brightRed + `  COULD NOT CHANGE THE RPC, cause YOU ARE ON COOLDOWN`.bold.brightRed + " ".repeat(-1 + stringlength - ` ┃ `.length - `  COULD NOT CHANGE THE RPC, cause YOU ARE ON COOLDOWN`.length) + "┃".bold.brightRed)
      console.log(`     ┃ `.bold.brightRed + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightRed)
      console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.brightRed)
    } catch {
      /* */
    }
  }
}
