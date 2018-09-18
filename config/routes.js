const Mailer = require('../services/Mailer');
const HtmlGenerator = require('../services/HtmlGenerator');


module.exports = app => {
	app.get("/api/noresults", (req, res) => {
		const term = req.query.term;
		let data = {
			term: term
		}
		console.log(data);
		HtmlGenerator("noTerm", data)
			.then(function (htmlString) {
				const mailer = new Mailer()
				mailer.sendEmail(process.env.emailTo, "Portfolio: Someone looked for a term with no results", htmlString, function (response) {
					console.log("Email '", process.env.email, "' sent to ", process.env.emailTo, response);
				})
			}).catch(function (err) {
				console.log('err =', err);
			});
		res.send("hello world");
	})
}