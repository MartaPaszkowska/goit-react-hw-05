import axios from "axios";

const API_KEY = "c3baf8095e801593eba38f8cbc4308d2";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
	const response = await axios.get(
		`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
	);
	return response.data.results;
};

export const searchMovies = async (query) => {
	const response = await axios.get(
		`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
	);
	return response.data.results;
};

export const getMovieDetails = async (movieId) => {
	const response = await axios.get(
		`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
	);
	return response.data;
};

export const getMovieCredits = async (movieId) => {
	const response = await axios.get(
		`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
	);
	return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
	const response = await axios.get(
		`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
	);
	return response.data.results;
};
