import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const BackToTop = () => {
	const router = useRouter();
	useEffect(() => {
		if (window) {
			window.addEventListener("scroll", () => {
				if (window.pageYOffset > 80) {
					document.querySelector(".arrow-container").classList.add("visible");
				} else {
					document
						.querySelector(".arrow-container")
						.classList.remove("visible");
				}
			});
		}
	});

	return (
		// link to the top of the page depending on actual url pathname
		<Link href={router.pathname}>
			<div className="arrow-container">
				<KeyboardArrowUpIcon className="arrow" />
			</div>
		</Link>
	);
};

export default BackToTop;
