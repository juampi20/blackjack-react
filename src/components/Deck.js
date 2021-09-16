import React, { useEffect, useState } from "react";
import { Card } from "./Card";

export const Deck = () => {
	const [deck, setDeck] = useState([
		{ code: "", image: "", value: "", suit: "" },
	]);

	useEffect(() => {
		getDeck();
	}, []);

	const getDeck = async () => {
		const url =
			"https://deckofcardsapi.com/api/deck/new/draw/?deck_count=6&count=312";
		const resp = await fetch(url);
		const { cards } = await resp.json();
		const listOfCards = cards.map((card) => {
			return {
				code: card.code,
				image: card.image,
				value: card.value,
				suit: card.suit,
			};
		});
		setDeck(listOfCards);
	};

	return (
		<>
			<div className='deck'>
				{deck.map((card) => (
					<Card key={card.code} image={card.image} />
				))}
			</div>
		</>
	);
};
