import Link from "next/link";

const Card = ({ imageUrl, position, websiteUrl }) => {
	return (
		<Link href={websiteUrl} target="_blank">
			<div
				className="card"
				style={{
					backgroundImage: `url(${imageUrl})`,
					backgroundPosition: position ? position : "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			></div>
		</Link>
	);
};

export default Card;
