import { useState, useEffect } from "react";
import {
	useParams,
	Outlet,
	NavLink,
	useLocation,
	useNavigate,
} from "react-router-dom";
import { getMovieDetails } from "../Api";
import css from "../css/MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
	const { movieId } = useParams();
	const [movie, setMovie] = useState(null);
	const location = useLocation();
	const navigate = useNavigate();

	const backLink = location.state?.from || "/movies";

	useEffect(() => {
		getMovieDetails(movieId).then(setMovie).catch(console.error);
	}, [movieId]);

	if (!movie) {
		return <div>Loading movie details...</div>;
	}

	const { title, poster_path, overview, genres, vote_average } = movie;
	const imageUrl = poster_path
		? `https://image.tmdb.org/t/p/w500${poster_path}`
		: "https://via.placeholder.com/500x750?text=No+Image";

	return (
		<div className={css.container}>
			{}
			<button
				className={css.backButton}
				onClick={() => navigate(backLink)}
			>
				← Back
			</button>

			{}
			<div className={css.details}>
				<img src={imageUrl} alt={title} className={css.poster} />
				<div className={css.info}>
					<h1>{title}</h1>
					<p>User score: {vote_average * 10}%</p>
					<h2>Overview</h2>
					<p>{overview}</p>
					<h2>Genres</h2>
					<p>{genres.map((genre) => genre.name).join(", ")}</p>
				</div>
			</div>

			<div className={css.additionalInfo}>
				<h2>Additional Information</h2>
				<div className={css.navLinks}>
					<NavLink
						to="cast"
						className={css.navLink}
						activeClassName={css.activeLink}
					>
						Cast
					</NavLink>
					<NavLink
						to="reviews"
						className={css.navLink}
						activeClassName={css.activeLink}
					>
						Reviews
					</NavLink>
				</div>
			</div>
			<Outlet />
		</div>
	);
}
