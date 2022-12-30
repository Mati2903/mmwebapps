import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Navbar = () => {
	const router = useRouter();

	const [open, setOpen] = useState(false); //stan hamburgera

	//funkcja do obsługi klika w menu hamburger zmieniająca stan (a przez to klasę) dla urządzeń mobilnych / dodaje też linię na dole navbara po jego otwarciu
	const handleMenuClick = () => {
		const navbar = document.querySelector(".nav");
		const logo = document.querySelector(".nav__logo");
		if (window.innerWidth < 768) {
			!open ? setOpen(true) : setOpen(false);
			!open
				? navbar.classList.add("active")
				: navbar.classList.remove("active");
			!open ? logo.classList.add("rotate") : logo.classList.remove("rotate");
		}
	};

	//usuwanie klas w elementach po zrobieniu resize szerokości okna >= 768px - usuwa linię dzielącą menu i obraca logo do pozycji poziomej
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setOpen(false);
				document.querySelector(".nav__logo").classList.remove("rotate");
				document.querySelector(".nav").classList.remove("active");
			}
		};
		window.addEventListener("resize", handleResize);
	});

	//usuwanie klas open (zamykanie menu) po kliknięciu na stronie poza navbarem
	useEffect(() => {
		if (open) {
			document.querySelector("main").addEventListener("click", () => {
				setOpen(false);
				document.querySelector(".nav").classList.remove("active");
				document.querySelector(".nav__logo").classList.remove("rotate");
			});
		}
	}, [open]);

	return (
		<nav className="nav">
			<div className="nav__logo">
				<Link href="/">MM Web Apps</Link>
			</div>
			<ul
				onClick={handleMenuClick}
				className={`nav-menu ${open ? "open" : ""}`}
			>
				<li>
					<Link href="/" className={router.pathname == "/" ? "active" : ""}>
						Home
					</Link>
				</li>
				<li>
					<Link
						href="/o-nas"
						className={router.pathname == "/o-nas" ? "active" : ""}
					>
						O nas
					</Link>
				</li>
				<li>
					<Link
						href="/oferta"
						className={router.pathname == "/oferta" ? "active" : ""}
					>
						Oferta
					</Link>
				</li>
				<li>
					<Link
						href="/portfolio"
						className={router.pathname == "/portfolio" ? "active" : ""}
					>
						Portfolio
					</Link>
				</li>
				<li>
					<Link
						href="/kontakt"
						className={router.pathname == "/kontakt" ? "active" : ""}
					>
						Kontakt
					</Link>
				</li>
			</ul>
			{/* hamburger */}
			<div
				className={`hamburger ${open ? "open" : ""}`}
				onClick={handleMenuClick}
			>
				<div className="hamburger__icon"></div>
			</div>
		</nav>
	);
};

export default Navbar;
