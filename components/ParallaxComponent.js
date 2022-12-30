import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const ParallaxComp = ({ imgUrl, speed }) => {
	return (
		<ParallaxBanner
			className="element"
			layers={[
				{
					image: imgUrl,
					speed: speed,
				},
				{
					speed: -15,
					children: (
						<div className="textContainer">
							<h1 className="header">Hello World!</h1>
						</div>
					),
				},
			]}
		/>
	);
};

export default ParallaxComp;
