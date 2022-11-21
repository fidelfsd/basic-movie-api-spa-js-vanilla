import { global } from "./global.js";

export class MovieRender {
   #ui;
   constructor() {
      this.#ui = {};
      this.#ui.root = document.getElementById("movies");
      this.#ui.title = document.getElementById("title");
   }

   clearView() {
      // clear view
      this.#ui.root.innerHTML = "";
   }

   renderPopularMovies(movies) {
      this.clearView();

      let rootStr = "";

      // render title
      this.#ui.title.innerText = "Popular";

      // container
      rootStr += '<div class="container-popular">';

      // movies
      for (const movie of movies) {
         rootStr += this.getMovieHtml(movie);
      }

      rootStr += "</div>";

      // render html
      this.#ui.root.innerHTML = rootStr;
   }

   renderUpcomingMovies(movies) {
      this.clearView();

      let rootStr = "";

      // clear view
      this.#ui.root.innerHTML = "";

      // render title
      this.#ui.title.innerText = "Upcoming";

      // container
      rootStr += '<div class="container-popular">';

      // movies
      for (const movie of movies) {
         rootStr += this.getMovieHtml(movie);
      }

      rootStr += "</div>";

      // render html
      this.#ui.root.innerHTML = rootStr;
   }

   renderMovieDetail(movie) {
      this.clearView();

      const root = this.#ui.root;

      // render title
      this.#ui.title.innerText = "Details";

      // render movies
      root.innerHTML = this.getMovieDetailHtml(movie);
   }

   getMovieHtml(movie) {
      const date = new Date(movie.release_date);
      const releaseYear = date.getFullYear();

      return `
    <div id="${movie.id}" class="movie">
        <div class="movie__poster">
          <img
            class="movie__poster__img"
            src="${global.images}/w185/${movie.poster_path}"
            alt="Imágen de ${movie.title}"
          />
        </div>
        <div class="movie__content">
          <div class="movie__vote-average">${movie.vote_average}</div>
          <h2 class="movie__title">${movie.title}</h2>
          <p class="movie__release-date">${releaseYear}</p>
        </div>
    </div>
    `;
   }

   getMovieDetailHtml(movie) {
      return `
    <div class="movie-detail">
        <div class="movie__poster">
          <img
            src="${global.images}/w342/${movie.poster_path}"
            alt="Imágen de ${movie.title}"
          />
        </div>
        <div class="movie__content">
            <h2 class="movie__title">${movie.title}</h2>
            <p class="movie__release-date">${movie.release_date}</p>
            <p class="movie__popularity">Popularity: ${movie.popularity}</p>
            <p class="movie__overview">${movie.overview}</p>
        </div>
      </div>
    `;
   }
}
