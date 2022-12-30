import Meta from "../components/Meta";
import HeaderImages from "../components/HeaderImages";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";

const Contact = () => {
	return (
		<>
			<Meta title="MM Web Apps | Kontakt" />
			<section className="contact-section">
				<div className="header-section__text-container">
					<h1>Skontaktuj się z nami</h1>
				</div>
				<HeaderImages imageUrl="./contact.jpg" position="55%" />
				<Logo />
				<ContactForm />
			</section>
		</>
	);
};

export default Contact;
