import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
	return (
		<Head>
			<meta name="vievport" content="width=device-width, initial-scale=1" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<title>{title}</title>
		</Head>
	);
};

Meta.defaultProps = {
	title: "Tytuł domyślny strony na zakładce",
	keywords: "Słowa kluczowe dla wyszukiwarek",
	description: "Opis widoczny w google pod adresem strony",
};

export default Meta;
