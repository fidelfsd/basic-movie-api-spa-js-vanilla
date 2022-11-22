import { PopularMovies } from "../pages/popular-movies/popular-movies.js";

export class MovieApp {
   #popularMovies;
   #ui;
   constructor() {
      this.#popularMovies = new PopularMovies();
      this.getUIBaseObjects();
      this.addUIEvents();
      this.#popularMovies.getPopularMovies();
   }

   getUIBaseObjects() {
      this.#ui = {};
      this.#ui.popular = document.getElementById("popular");
      this.#ui.upcoming = document.getElementById("upcoming");
   }

   addUIEvents() {
      this.#ui.popular.addEventListener("click", () => {
         this.#popularMovies.getPopularMovies();
      });

      this.#ui.upcoming.addEventListener("click", () => {
         //
      });
   }
}
