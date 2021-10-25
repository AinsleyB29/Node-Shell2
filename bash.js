const fs = require("fs");
const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");
// import { cwd } from "process";

// Output a prompt
process.stdout.write("prompt > ");

//The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
	const cmd = data.toString().trim().split(" ");
	// const path = ''
	// console.log(cmd)
	if (cmd[0] === "pwd") {
		pwd(done);
	}

	if (cmd[0] === "ls") {
		ls(done);
	}

	if (cmd[0] === `cat` && cmd[1]) {
		cat(cmd[1], done);
	}

	if (cmd[0] === "curl" && cmd[1]) {
		curl(cmd[1], done);
	}

	// process.stdout.write("You typed:" + cmd);
});

const done = (output) => {
	process.stdout.write(output);
	process.stdout.write("\nprompt > ");
};
