import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../api";
import MovieList from "../components/MovieList";
import css from "../css/HomePage.module.css";

export default function HomePage() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetchTrendingMovies().then(setMovies).catch(console.error);
	}, []);

	return (
		<div>
			<div className={css.trendingContainer}>
				<h2 className={css.trendingTitle}>Hey Gennaro 😁</h2>
				<MovieList movies={movies} />
			</div>
		</div>
	);
}
