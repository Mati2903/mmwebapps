import Meta from "../components/Meta";
import HeaderImages from "../components/HeaderImages";
import Link from "next/link";
import { Button } from "@mui/material";

const Offer = () => {
	return (
		<>
			<Meta title="MM Web Apps | Oferta" />
			<section className="offer-section">
				<div className="header-section__text-container">
					<h1>Sprawdź naszą ofertę</h1>
				</div>
				<HeaderImages imageUrl="./offer.jpg" position="70%" />
				<div className="offer-section__description-container">
					<p>
						Nasza oferta obejmuje projekt i wykonanie stron i aplikacji
						internetowych.
					</p>
					<p>
						W zależności od potrzeb klienta możemy w pełni personalizować wyglad
						oraz funkcjonalność strony.
					</p>
					<p>
						Udzielamy gwarancji na poprawność funkcjonowania naszych projektów
						na okres 12 miesięcy.
					</p>
					<p>Oferujemy także wsparcie techniczne po zakończeniu gwarancji.</p>
				</div>
				<div className="offer-section__button-container">
					{/* link directly to form on /kontakt page by form id #form */}
					<Link href="/kontakt#form" scroll={false}>
						<Button variant="contained" className="offer__contact-button">
							Skontaktuj się z nami
						</Button>
					</Link>
				</div>

				<div className="offer-section__image-container">
					<img src="/webproject.png" className="offer-section__image" />
				</div>
			</section>
		</>
	);
};

export default Offer;
