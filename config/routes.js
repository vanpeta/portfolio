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
	app.post("/api/contactme", (req, res) => {
		const data = req.body;
		//email me
		const subject = data.name + " Sent you a message from your portfolio";
		HtmlGenerator("contact", data)
			.then( htmlString => {
				const mailer = new Mailer();
				mailer.sendEmail(process.env.emailTo, subject, htmlString, response => {
					console.log("Email '", process.env.email, "' sent to ", process.env.emailTo, response);
				})
			}).catch(err => {
				console.log("err=",err);
			})
		//email sender
		const subjectSender = data.name + ", Thank You For Reaching Out";
		HtmlGenerator("contactSender", data)
			.then(htmlString => {
				const mailer = new Mailer();
				mailer.sendEmail(data.email, subjectSender, htmlString, response => {
					console.log("Email '", process.env.email, "' sent to ", data.email, response);
				})
			}).catch(err => {
				console.log("err=", err);
			})
		res.send("hello world");
	});
}