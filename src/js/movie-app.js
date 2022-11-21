import { MovieService } from "./services/movie-service.js";

export class MovieApp {
   #movieServie;
   #ui;
   constructor() {
      this.#movieServie = new MovieService();
      this.#movieServie.getPopularMovies();
      this.getUIBaseObjects();
      this.addUIEvents();
   }

   getUIBaseObjects() {
      this.#ui = {};
      this.#ui.popular = document.getElementById("popular");
      this.#ui.upcoming = document.getElementById("upcoming");
   }

   addUIEvents() {
      this.#ui.popular.addEventListener("click", () => {
         this.#movieServie.getPopularMovies();
      });

      this.#ui.upcoming.addEventListener("click", () => {
         this.#movieServie.getUpcomingMovies();
      });
   }
}
