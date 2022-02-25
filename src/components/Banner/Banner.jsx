import React, { useEffect, useState } from "react";
import { StyledBanner } from "./index";
import axios from "../../services/axios";
import { requests } from "../../services/request";

function Banner() {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
		};

		fetchData();
	}, []);

	const truncate = (string, n) => {
		return string?.length > n ? string.substr(0, n - 1) + "..." : string;
	};

	return (
		<>
			{Object.keys(movie).length > 0 && (
				<StyledBanner
					style={{
						backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
					}}
				>
					<div className="banner__container">
						<h1 className="banner__title">
							{movie?.title || movie?.name || movie?.original_name}
						</h1>
						<div className="banner__buttons">
							<button className="banner__button">Play</button>
							<button className="banner__button">My List</button>
							<h2 className="banner__description">
								{truncate(movie?.overview, 150)}
							</h2>
						</div>
					</div>
					<div className="banner--fadeBottom"></div>
				</StyledBanner>
			)}
		</>
	);
}

export default Banner;
