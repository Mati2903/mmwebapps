import React from "react";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="footer">
			<div className="footer__copyright">
				Copyright © {year} <a>MM Web Apps</a>
			</div>
		</footer>
	);
};

export default Footer;
