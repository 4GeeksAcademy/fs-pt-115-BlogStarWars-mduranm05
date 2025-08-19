import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { CardsContainer } from "../components/CardsContainer.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [characters, setCharacters] = useState([])
	const [planets, setPlanets] = useState([])
	const [vehicles, setVehicles] = useState([])
	useEffect(() => {

		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(data => setCharacters(data.results))
			.catch(err => console.error(err))

		fetch("https://www.swapi.tech/api/planets")
			.then(res => res.json())
			.then(data => setPlanets(data.results))
			.catch(err => console.error(err))

		fetch("https://www.swapi.tech/api/vehicles")
			.then(res => res.json())
			.then(data => setVehicles(data.results))
			.catch(err => console.error(err))
	}, [])
	return (
		<div className="text-left mt-5">
			<CardsContainer title="Characters" cardsArray={characters} />
			<CardsContainer title="Planets" cardsArray={planets} />
			<CardsContainer title="Vehicles" cardsArray={vehicles} />
		</div>
	);
}; 