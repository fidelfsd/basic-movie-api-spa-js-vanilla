import { global } from "../global.js";

export class MovieService {
   constructor() {}

   getPopularMovies(page = 1) {
      const apiUrl = `${global.baseUrl}/movie/popular?api_key=${global.apiKey}&page=${page}`;
      return fetch(apiUrl);
   }

   getUpcomingMovies() {
      const apiUrl = `${global.baseUrl}/movie/upcoming?api_key=${global.apiKey}&page=${page}`;
      return fetch(apiUrl);
   }

   getMovieDetail(movieId) {
      const apiUrl = `${global.baseUrl}/movie/${movieId}?api_key=${global.apiKey}&page=${page}`;
      return axios.get(apiUrl);
   }
}
