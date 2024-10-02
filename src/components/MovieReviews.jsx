import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../Api";

export default function MovieReviews() {
	const { movieId } = useParams();
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		getMovieReviews(movieId).then(setReviews).catch(console.error);
	}, [movieId]);

	if (!reviews.length) {
		return <p>No reviews available.</p>;
	}

	return (
		<ul>
			{reviews.map((review) => (
				<li key={review.id}>
					<h3>{review.author}</h3>
					<p>{review.content}</p>
				</li>
			))}
		</ul>
	);
}
