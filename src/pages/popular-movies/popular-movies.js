import { MovieComponent } from "../../components/movie.js";
import { MovieService } from "../../js/services/movie-service.js";
import { LoadingController } from "../../js/services/loading-service.js";
import { SPINNER } from "../../js/global.js";

export class PopularMovies {
   #ui;
   #movieComponent;
   #movieService;
   #loadingCtrl;
   constructor() {
      this.#ui = {};
      this.#ui.moviesRoot = document.getElementById("movies");
      this.#movieComponent = new MovieComponent();
      this.#movieService = new MovieService();
      this.#loadingCtrl = new LoadingController({
         spinner: SPINNER.comet,
      });
   }

   async getPopularMovies() {
      // loading
      this.#loadingCtrl.present();

      await this.#sleep(2000); // add delay

      try {
         let res = await this.#movieService.getPopularMovies();
         const movies = res.data.results;
         this.#renderMovies(movies);
      } catch (error) {
         console.log(error);
      }

      // dismiss loading
      this.#loadingCtrl.dismiss();
   }

   #renderMovies(movies) {
      let moviesStr = "";

      moviesStr += `
      <h2>Popular</h2>
      <div class="container-popular">
      `;
      // movies
      for (const movie of movies) {
         moviesStr += this.#movieComponent.getMovieHtml(movie);
      }
      moviesStr += `
      </div>
      `;

      // render html
      this.#ui.moviesRoot.innerHTML = moviesStr;
   }

   #sleep(ms) {
      return new Promise((r) => setTimeout(r, ms));
   }
}
