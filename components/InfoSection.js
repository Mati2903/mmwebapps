import InfoElement from "../components/InfoElement";
import { Button } from "@mui/material";
import Link from "next/link";
import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const InfoSection = () => {
	//=========== animation with framer motion ========
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.5, once: true }); //amount of element visible to fire animation
	const animationButton = useAnimation();

	useEffect(() => {
		//finish state
		if (isInView) {
			animationButton.start({
				y: 0,
				opacity: 1,
				transition: {
					type: "spring",
					bounce: 0.5,
					delay: 1,
					duration: 1,
				},
			});

			//starting state
		} else if (!isInView) {
			animationButton.start({ y: 50, opacity: 0 });
		}
	}, [isInView]);

	//=====================================================

	return (
		<section className="home__main-section">
			<InfoElement
				title="Piszemy kod od podstaw"
				description="Tworząc aplikacje internetowe piszemy ich kod od podstaw. Czasami korzystamy z bibliotek gotowych komponentów."
				imgSrc="/code.png"
				imgAlt="grafika przedstawiająca linie kodu na ekranie"
			/>
			<InfoElement
				title="Projektujemy responsywny design"
				description="Nasze projekty zachowują responsywność, czyli wyglądają dobrze niezależnie od wielkości ekranu. Stosujemy zasadę 'mobile first'."
				imgSrc="/responsivedsgn.png"
				imgAlt="grafika przedstawiająca urządzenia typu desktop, laptop oraz mobile ilustrująca responsywny projekt strony internetowej"
			/>
			<InfoElement
				title="Implementujemy system zarządzania treścią"
				description="Zależnie od wymagań klienta możemy zaimplementować system zarządzania treścią na stronie internetowej - tzw. CMS (ang. Content Management System)."
				imgSrc="/cms.png"
				imgAlt="grafika z laptopem, kluczem, śrubokrętem i trybami ilustrująca zasadę działania systemu CMS"
			/>
			<motion.div ref={ref} animate={animationButton}>
				<Link href="/oferta">
					<Button variant="contained" className="home__offer-button">
						Zobacz ofertę
					</Button>
				</Link>
			</motion.div>
		</section>
	);
};

export default InfoSection;
