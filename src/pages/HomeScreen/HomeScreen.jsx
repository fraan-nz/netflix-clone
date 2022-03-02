import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";
import { StyledHomeScreen } from "./index";
import { requests } from "../../services/request";

function HomeScreen() {
	return (
		<StyledHomeScreen>
			<NavBar isLogged />
			<Banner />
			<Row
				title="Netflix Originals"
				fetchURL={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title="Trending Now" fetchURL={requests.fetchTrending} />
			<Row title="Top Rated" fetchURL={requests.fetchTopRated} />
			<Row title="Action" fetchURL={requests.fetchActionMovies} />
			<Row title="Comedy" fetchURL={requests.fetchComedyMovies} />
			<Row title="Horror" fetchURL={requests.fetchHorrorMovies} />
			<Row title="Romance" fetchURL={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchURL={requests.fetchDocumantaries} />
		</StyledHomeScreen>
	);
}

export default HomeScreen;
