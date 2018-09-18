const Mailer = require('../services/Mailer');
const HtmlGenerator = require('../services/HtmlGenerator');


module.exports = app => {
	app.get("/api/noresults", (req, res) => {
		const data = { term: req.query.term };
		HtmlGenerator("noTerm", data)
			.then( htmlString => {
				const mailer = new Mailer()
				mailer.sendEmail(process.env.emailTo, "Portfolio: Someone looked for a term with no results", htmlString, response => {
					console.log("Email '", process.env.email, "' sent to ", process.env.emailTo, response);
				})
			}).catch( err => {
				console.log('err =', err);
			});
		res.send("hello world");
	});
}