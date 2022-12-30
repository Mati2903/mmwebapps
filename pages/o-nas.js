import Meta from "../components/Meta";
import HeaderImages from "../components/HeaderImages";
import AboutElement from "../components/AboutElement";

const About = () => {
	return (
		<>
			<Meta title="MM Web Apps | O nas" />
			<section className="about-section">
				<div className="header-section__text-container">
					<h1>Kim jesteśmy i czym się zajmujemy</h1>
				</div>
				<HeaderImages imageUrl="./about.jpg" position="83%" />
				<div className="about-section__description-container">
					<AboutElement
						paragraph="Jesteśmy firmą projektującą strony i aplikacje internetowe. Języki w
						jakich piszemy to HTML, CSS oraz JavaScript. Wykorzystujemy również
						frameworki takie jak React czy NextJS."
						imgSrc="/htmlcssjs.png"
						imgAlt="zbiór oficjalnych logo html, css, javascript oraz react"
						classname="htmlcssjs"
					/>

					<AboutElement
						paragraph="Do niektórych projektów możemy również zaimplementować system
						zarządzania treścią strony, który pomaga użytkownikowi w łatwy
						sposób zarządzać stroną internetową bez konieczności pisania kodu."
						imgSrc="/cmssystem.png"
						imgAlt="obraz ilustrujący laptop z różymi elementami na stronie internetowej"
						classname="cmssystem"
					/>

					<AboutElement
						paragraph="Aplikacje tworzymy od postaw co pozwala nam na praktycznie dowolny
						projekt layoutu strony, dodawanie elementów i kształtów, animacji
						itp."
						imgSrc="/websiteproject.png"
						imgAlt="ilustracja postaci układających elementy na stronie internetowej i projektujących jej wygląd"
						classname="websiteproject"
					/>
					<AboutElement
						paragraph="Na naszych stronach dbamy również o responsywność czyli poprawne
						wyświetlanie się treści na różnej wielkości ekranach od dużych
						monitorów przez laptopy i tablety aż po smartfony. Każdy
						projekt realizujemy z podejściem 'mobile first' co pozytywnie wpływa
						na pozycjonowanie strony w wynikach wyszukiwania."
						imgSrc="/responsive.png"
						imgAlt="ilustracja przedstawiająca ekrany dużego komputera, laptopa, tabletu oraz smartphone dotycząca responsywnego projektu stron internetowych"
						classname="responsive"
					/>
					<AboutElement
						paragraph="Nieodłącznym elementem realizacji każdego projektu jest również
						niejedna filiżanka dobrej kawy &#128578;"
						imgSrc="/coffee.png"
						imgAlt="grafika ilustrująca filiżankę kawy"
						classname="coffee"
					/>
				</div>
			</section>
		</>
	);
};

export default About;
