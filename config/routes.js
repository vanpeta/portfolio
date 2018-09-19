const Mailer = require('../services/Mailer');
const HtmlGenerator = require('../services/HtmlGenerator');


module.exports = app => {
	//NO RESULTS PAGE SERVED
	app.get("/api/noresults", (req, res) => {
		const data = { term: req.query.term };
		let customeResponse = {};
		HtmlGenerator("noTerm", data)
			.then( htmlString => {
				const mailer = new Mailer()
				mailer.sendEmail(process.env.emailTo, "Portfolio: Someone looked for a term with no results", htmlString, response => {
					return (customeResponse.emailme = {
						status: 200,
						message: "Email template 'noTerm' from " + process.env.email + " was sent to " + process.env.emailTo,
						response: response
					});
				})
			}).catch( err => {
				customeResponse.emailnoresults = { status: 400, err: err };
				res.status(400);
				res.send(customeResponse);
			});
		res.status(200);
    res.send(customeResponse);
	});
	//CONTACT FORM SUBMITTED
	app.post("/api/contactme", (req, res) => {
		const data = req.body;
		let customeResponse = {};
		//email me
		const subject = data.name + " Sent you a message from your portfolio";
		HtmlGenerator("contact", data)
			.then( htmlString => {
				const mailer = new Mailer();
				mailer.sendEmail(process.env.emailTo, subject, htmlString, response => {
					return (customeResponse.emailme = {
						status: 200,
						message: "Email template 'contact' from " + process.env.email + " was sent to " + process.env.emailTo,
						response: response
					});
				})
			}).catch(err => {
				customeResponse.emailme = { status: 400, err: err };
				res.status(400);
        res.send(customeResponse);
			});
		//email sender
		const subjectSender = data.name + ", Thank You For Reaching Out";
		HtmlGenerator("contactSender", data)
			.then(htmlString => {
				const mailer = new Mailer();
				mailer.sendEmail(data.email, subjectSender, htmlString, response => {
					return (customeResponse.emailsender = {
						status: 200,
						message: "Email template 'contactSender' from " + process.env.email + " was sent to " + process.env.emailTo,
						response: response
					});
				})
			}).catch(err => {
				customeResponse.emailsender = { status: 400, err: err };
				res.status(400);
				res.send(customeResponse);
			});
		res.status(200);
		console.log("this is the actual response", customeResponse);
		res.send(customeResponse);
	});
}