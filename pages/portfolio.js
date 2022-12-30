import Meta from "../components/Meta";
import HeaderImages from "../components/HeaderImages";
import Cards from "../components/Cards";

const Portfolio = () => {
	return (
		<>
			<Meta title="MM Web Apps | Portfolio" />
			<section className="portfolio-section">
				<div className="header-section__text-container">
					<h1>Zobacz nasze projekty</h1>
				</div>
				<HeaderImages imageUrl="./portfolio.jpg" position="40%" />
				<Cards />
			</section>
		</>
	);
};

export default Portfolio;
