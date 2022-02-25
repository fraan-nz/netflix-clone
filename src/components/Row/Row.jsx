import React, { useEffect, useState } from "react";
import axios from "../../services/axios";
import { StyledRow } from "./index";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow = false }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const request = await axios.get(fetchURL);
			setMovies(request.data.results);
			return request;
		};

		fetchData();
	}, [fetchURL]);

	return (
		<StyledRow>
			<h2>{title}</h2>
			<div className="row__container">
				{movies.map(
					(movie) =>
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.backdrop_path)) && (
							<img
								key={movie.id}
								src={`${base_url}${
									isLargeRow ? movie.poster_path : movie.backdrop_path
								}`}
								alt={movie.name}
								className={`row__image ${isLargeRow && "row__imageLarge"}`}
							/>
						)
				)}
			</div>
		</StyledRow>
	);
}

export default Row;
