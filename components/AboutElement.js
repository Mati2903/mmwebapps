import { motion } from "framer-motion";

const AboutElement = ({ paragraph, imgSrc, imgAlt, classname }) => {
	//============= animation with framer motion ===================

	const cardVariants = {
		offscreen: {
			y: 370,
		},
		onscreen: {
			y: 0,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 0.8,
			},
		},
	};

	//=============================================================

	return (
		<>
			<p>{paragraph}</p>
			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.9 }} //once: true is for play animation only once after page load and enter viewport
				style={{ overflow: "hidden" }}
			>
				<div className="about-section__image-container">
					<motion.div variants={cardVariants}>
						<img
							src={imgSrc}
							alt={imgAlt}
							className={`about-section__image ${classname}`}
						/>
					</motion.div>
				</div>
			</motion.div>
		</>
	);
};

export default AboutElement;
