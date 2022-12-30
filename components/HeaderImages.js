const HeaderImages = ({ imageUrl, position }) => {
	return (
		<div
			className="header-image"
			style={{
				// rgb value should be the same as $navBgColor variable from variables.scss
				background: `linear-gradient(rgb(209, 253, 255) 0%, rgba(0, 0, 0, 0.15)),
  url(${imageUrl})`,
				backgroundPosition: position ? position : "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		></div>
	);
};

export default HeaderImages;
