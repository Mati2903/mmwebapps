export default function (req, res) {
	let nodemailer = require("nodemailer");
	const transporter = nodemailer.createTransport({
		host: "smtp.mailtrap.io",
		port: 2525,
		secure: false,
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		},
	});
	const mailData = {
		from: req.body.email,
		to: process.env.SENDTO,
		subject: `Wiadomość od: ${req.body.name}, temat: ${req.body.subject}`,
		text: req.body.message + " | Wysłane przez: " + req.body.email,
		html: `<div>${req.body.message}</div><p>Wysłane przez:
    ${req.body.email}</p>`,
	};
	transporter.sendMail(mailData, function (err, info) {
		if (err) {
			console.log(err);
			res.json({ status: "fail" });
		} else {
			console.log(info);
			res.json({ status: "success" });
		}
	});
}
