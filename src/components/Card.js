import React from "react";

export const Card = ({ code, image }) => {
	return (
		<div>
			<img src={image} alt={code} height='144' />
		</div>
	);
};
