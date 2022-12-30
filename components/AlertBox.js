import { Alert, AlertTitle } from "@mui/material";
import React, { useEffect, useState } from "react";

const AlertBox = ({ delay }) => {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false);
		}, delay);
		return () => clearTimeout(timer);
	}, [delay]);

	return visible ? (
		<Alert severity="success" className="alert">
			<AlertTitle>Sukces!</AlertTitle>
			Twoja wiadomość została wysłana
		</Alert>
	) : (
		<div />
	);
};

export default AlertBox;
