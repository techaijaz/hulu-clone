const API_KEY = "b91f2327f66e62fc997434bdb0454f8a";

export default {
    fetchTrending : `trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchTopRated : `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies : `discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchSciFiyMovies : `discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWestrenMovies : `discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimationMovies : `discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTv : `discover/movie?api_key=${API_KEY}&with_genres=10770`
}