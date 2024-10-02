import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          {
            headers: {
              Authorization: 'Bearer c3baf8095e801593eba38f8cbc4308d2',
            },
          }
        );
        setCast(response.data.cast);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div className={styles.container}>
      {loading && <p>Loading cast...</p>}
      {error && <p>Something went wrong: {error.message}</p>}
      {cast.length > 0 ? (
        <ul>
          {cast.map(actor => (
            <li key={actor.cast_id}>
              {actor.name} as {actor.character}
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast available.</p>
      )}
    </div>
  );
};

export default MovieCast;
