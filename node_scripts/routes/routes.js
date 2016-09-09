/* global __root */
var assets = require(__root + "public/assets.json"); // eslint-disable-line

// =======================
// Routes
// =======================
exports.routes = function (app, http, io) {
	app.get("/admin/ping", function (req, res) {
		res.send("pong");
	});

	io.on("connection", function (socket) {
		console.log("a user connected");
		socket.on("disconnect", function () {
			console.log("user disconnected");
		});
		socket.on("chat message", function (msg) {
			console.log("message: " + msg);
		});
	});

	app.get("/", function (req, res) {
		res.locals = { headerType: "" };
		res.render("pages/home", { title: "Home Page", assets: assets });
	});

	app.get("*", function (req, res) {
		res.render("layout", { layout: false, title: "404 Page", assets: assets });
	});
};
