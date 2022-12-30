import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const InfoElement = ({ title, description, imgSrc, imgAlt }) => {
	//============= animation with framer motion ===================
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.7, once: true }); //amount of element visible to fire animation

	const animationImage = useAnimation();
	const animationText = useAnimation();

	useEffect(() => {
		//finish state
		if (isInView) {
			animationImage.start({
				scale: 1,
				opacity: 1,
				transition: {
					type: "spring",
					bounce: 0.3,
					delay: 1,
					duration: 1.5,
				},
			});
			animationText.start({
				y: 0,
				opacity: 1,
				transition: {
					type: "spring",
					bounce: 0.6,
					delay: 0.2,
					duration: 1,
				},
			});
			//starting state
		} else if (!isInView) {
			animationImage.start({
				scale: 0,
				opacity: 0,
			});
			animationText.start({ y: -50, opacity: 0 });
		}
	}, [isInView]);
	//=============================================================

	return (
		<div className="info">
			{/* motion.div is a part of framer motion to run animations */}
			<motion.div ref={ref} animate={animationText}>
				<div className="info__text-container">
					<h2 className="text-container__title">{title}</h2>
					<p className="text-container__description">{description}</p>
				</div>
			</motion.div>

			<motion.div
				ref={ref}
				animate={animationImage}
				className="info__image-container"
			>
				<img src={imgSrc} alt={imgAlt} className="image-container__image" />
			</motion.div>
		</div>
	);
};

export default InfoElement;
