richpresence
var RPC = require("discord-rpc");
var rpc = new RPC.Client({
  transport: "ipc"
});

decoration
require("colors");
;)
let map = new Map();

day?
const event = new Date();
event.setHours(00, 00, 00)

it
rpc.on("ready", () => {
  presence
  set_rpc()
  seconds
  setInterval(() => {
    set_rpc();
  }, 60e3)

  ready
  try {
    const stringlength = 69;
    console.log("\n")
    console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + `  Discord Rich Presence Ready | made by Akrasio`.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length - `  Discord Rich Presence Ready | made by Akrasio`.length) + "┃".bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + `  |-> ${`Displaying for: `.magenta}${rpc.user.username}#${rpc.user.discriminator}`.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length - `  |-> Displaying for: ${rpc.user.username}#${rpc.user.discriminator}`.length) + "┃".bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightGreen)
    console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.brightGreen)
  } catch {
    /* */
  }
});


tool
rpc.login({
  clientId: "638394395988852766",
});

presence
async function set_rpc(option) {
  cooldown
  if (!map.has("rpccooldown")) {
    cooldown
    map.set("rpccooldown")
    if (option == "re") {
      console
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
    activity
    const nowTime = new Date();
    const times = nowTime.getHours();
    let image = String("clock"+times);
    if (times == 0) image = "clock";
    await rpc.setActivity({
      "details": "━━━━━━━━━━",
      "state": "Current Local Time:",
      "largeImageKey": image,
      "largeImageText": "(Local Time):",
      "startTimestamp": event
    })
    seconds)
    setTimeout(() => {
      map.delete("rpccooldown");
    }, 15000)
  }
  cooldown
  else {
    information
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
