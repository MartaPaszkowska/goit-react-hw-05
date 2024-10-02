import { Link, useLocation } from "react-router-dom";
import css from "../css/MovieList.module.css";

export default function MovieList({ movies }) {
	const location = useLocation();
	return (
		<div className={css.movieGrid}>
			{movies.map((movie) => (
				<div key={movie.id} className={css.movieCard}>
					<Link
						to={`/movies/${movie.id}`}
						state={{ from: location }}
						className={css.movieLink}
					>
						<img
							src={
								movie.poster_path
									? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
									: "https://via.placeholder.com/200x300?text=No+Image"
							}
							alt={movie.title}
							className={css.movieImage}
						/>
						<div className={css.movieTitleContainer}>
							<h3 className={css.movieTitle}>{movie.title}</h3>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
}
