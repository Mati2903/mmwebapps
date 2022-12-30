import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Sending");
		let data = {
			name,
			email,
			subject,
			message,
		};

		if (!name || !subject || !message) {
			alert("Uzupełnij wymagane pola");
			return;
		} else if (!email.match("@.")) {
			alert("Niewłaściwy adres email");
			return;
		}

		const response = await fetch("https://mmwebapps.vercel.app/api/contact", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then(async (res) => {
				const resData = await res;

				// status strings are from backend and must be the same as here (success and fail)
				if (resData.status === "success") {
					console.log("Response succeeded!");
					setSubmitted(true);
					setName("");
					setEmail("");
					setSubject("");
					setMessage("");
					alert("Wiadomość została wysłana!");
				} else if (resData.status === "fail") {
					alert("Wystąpił błąd");
				}
			});
	};

	return (
		<>
			{/* after submitting form alert will be displayed for 5s  <AlertBox delay={5000} />*/}

			<Box
				className="contact-form"
				component="form"
				id="form"
				method="post"
				sx={{
					"& .MuiTextField-root": { width: "250px" },
				}}
				noValidate
				autoComplete="off"
			>
				<div className="contact-form__fields-container">
					<TextField
						required
						type="text"
						name="name"
						value={name}
						htmlFor="name"
						id="name-input"
						label="Imię i nazwisko"
						helperText="* Pole wymagane"
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>

					<TextField
						required
						type="email"
						name="email"
						htmlFor="email"
						id="email-input"
						label="Email"
						value={email}
						helperText="* Pole wymagane"
						placeholder="example@email.com"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<TextField
						fullWidth
						required
						name="subject"
						htmlFor="subject"
						id="subject-input"
						value={subject}
						helperText="* Pole wymagane"
						label="Temat wiadomości"
						placeholder="Wpisz temat"
						multiline
						onChange={(e) => {
							setSubject(e.target.value);
						}}
					/>

					<TextField
						fullWidth
						required
						name="message"
						htmlFor="message"
						id="message-input"
						value={message}
						helperText="* Pole wymagane"
						label="Treść wiadomości"
						placeholder="Wpisz treść"
						multiline
						onChange={(e) => {
							setMessage(e.target.value);
						}}
					/>
					<Button
						className="form-button"
						variant="contained"
						type="submit"
						endIcon={<SendIcon />}
						onClick={(e) => {
							handleSubmit(e);
						}}
					>
						Wyślij
					</Button>
				</div>
			</Box>
		</>
	);
};

export default ContactForm;
