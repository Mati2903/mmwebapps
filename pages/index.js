import Meta from "../components/Meta";
import HeaderSection from "../components/HeaderSection";
import InfoSection from "../components/InfoSection";

export default function Home({ header }) {
	return (
		<>
			<Meta
				title="MM Web Apps - Strony internetowe"
				keywords="projektowanie stron internetowych, tworzenie stron internetowych, strony internetowe lubelskie, strony internetowe lublin, programowanie stron internetowych, programowanie aplikacji internetowych, programowanie javascript"
				description="MM Web Apps to firma zajmująca się kompleksowym projektem i wykonawstwem stron i aplikacji internetowych."
			/>

			<HeaderSection />
			<InfoSection />
		</>
	);
}
