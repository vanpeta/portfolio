module.exports = app => {
	app.get("/api/noresults", (req, res) => {
		const term = req.query.term;
		console.log(term);
		res.send("hello world");
	})
}