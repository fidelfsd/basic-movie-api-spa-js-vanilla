import { global } from "../js/global.js";

export class MovieComponent {
   constructor() {}

   getMovieHtml(movie) {
      const date = new Date(movie.release_date);

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
          <p class="movie__release-date">${date.getFullYear()}</p>
        </div>
    </div>
    `;
   }
}
