import HeaderImages from "./HeaderImages";

const HeaderSection = () => {
	return (
		<section className="header-section">
			<div className="header-section__text-container">
				<h1>
					Tworzymy strony internetowe <br />
					od podstaw
				</h1>
			</div>
			<HeaderImages imageUrl="./computer.jpg" />
		</section>
	);
};

export default HeaderSection;
