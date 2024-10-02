import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../Api";
import css from "../css/MovieCast.module.css";

export default function MovieCast() {
	const { movieId } = useParams();
	const [cast, setCast] = useState([]);

	useEffect(() => {
		getMovieCredits(movieId).then(setCast).catch(console.error);
	}, [movieId]);

	if (!cast.length) {
		return <p>No cast information available.</p>;
	}

	return (
		<ul className={css.castList}>
			{cast.map((actor) => (
				<li key={actor.id} className={css.castItem}>
					<img
						src={
							actor.profile_path
								? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
								: "https://via.placeholder.com/200x300?text=No+Image"
						}
						alt={actor.name}
						className={css.castImage}
					/>
					<p>{actor.name}</p>
					<p>as {actor.character}</p>
				</li>
			))}
		</ul>
	);
}
