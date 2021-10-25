const fs = require("fs");
const pwd = require("./pwd");
const ls = require("./ls");
// import { cwd } from "process";

// Output a prompt
process.stdout.write("prompt > ");

//The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    pwd();
  }

  if (cmd === "ls") {
    ls();
  }

  process.stdout.write("You typed:" + cmd);
  process.stdout.write("\nprompt > ");
});
