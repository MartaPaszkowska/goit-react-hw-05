import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../api";
import MovieList from "../components/MovieList";
import css from "../css/MoviesPage.module.css";

export default function MoviesPage() {
	const [movies, setMovies] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();

	const query = searchParams.get("query") || "";

	useEffect(() => {
		if (query) {
			searchMovies(query).then(setMovies).catch(console.error);
		}
	}, [query]);

	const handleSearch = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const query = form.elements.query.value;
		setSearchParams({ query });
	};

	return (
		<div className={css.container}>
			<form className={css.searchForm} onSubmit={handleSearch}>
				<input
					name="query"
					type="text"
					className={css.searchInput}
					placeholder="Search movies..."
				/>
				<button type="submit" className={css.searchButton}>
					Search
				</button>
			</form>
			<MovieList movies={movies} />
		</div>
	);
}
