import Nav from "./Nav";
import Meta from "./Meta";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

const Layout = ({ children }) => {
	return (
		<>
			<Meta />
			<Nav />
			<main>{children}</main>
			<Footer />
			<BackToTop />
		</>
	);
};

export default Layout;
