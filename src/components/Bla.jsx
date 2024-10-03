const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2JhZjgwOTVlODAxNTkzZWJhMzhmOGNiYzQzMDhkMiIsIm5iZiI6MTcyNzgwNTcwNy4wMzQxNTIsInN1YiI6IjY2ZmMzMzhlOGFhNzM0YjM3NmE2OTRlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WbzYOUx31a_gMuT7zU1pCXiRgX4HbZpxl7feLboEZuU",
	},
};

fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US", options)
	.then((response) => response.json())
	.then((response) => console.log(response))
	.catch((err) => console.error(err));
