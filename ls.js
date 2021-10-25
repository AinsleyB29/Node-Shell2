const fs = require("fs");
// const done = require('./bash.js')

module.exports = function (done) {
	fs.readdir("./", "utf8", (err, files) => {
		if (err) {
			done("You have an error");
		} else {
			done(files.join("\n"));
		}
	});
};
