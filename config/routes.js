module.exports = app => {
	app.get("/api", (req, res) => {
		res.send("Hello world")
	});
}