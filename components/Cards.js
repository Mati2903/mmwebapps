import Card from "./Card";

const Cards = () => {
	return (
		<section className="cards-container">
			<Card
				imageUrl="./stars.png"
				websiteUrl="https://starsproject.vercel.app/"
			/>
			<Card
				imageUrl="./ubezpieczenia.png"
				websiteUrl="https://ubezpieczenia.vercel.app/"
			/>
			<Card
				imageUrl="./parallax.png"
				websiteUrl="https://parallaxeffect.vercel.app/"
			/>
			<Card imageUrl="./cv.png" websiteUrl="https://mazurek-cv.vercel.app/" />
			<Card imageUrl="./drony.png" websiteUrl="https://propwash.vercel.app/" />
			<Card imageUrl="./tiante.png" websiteUrl="https://tiantev2.vercel.app/" />
		</section>
	);
};

export default Cards;
