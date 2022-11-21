import { global } from "../global.js";
import { MovieRender } from "../movie-render.js";
import { LoadingService } from "./loading-service.js";

export class MovieService {
   #movieRender;
   #loadingCtrl;
   #ui;
   constructor() {
      this.#movieRender = new MovieRender();
      this.#loadingCtrl = new LoadingService({
         spinner: "spinner-comet",
      });
   }

   async getPopularMovies() {
      // loading
      this.#loadingCtrl.present();

      const api = `${global.baseUrl}/movie/popular?api_key=${global.apiKey}`;
      try {
         let data = await fetch(api);
         data = await data.json();
         const movies = data.results;
         console.log("movies", movies);

         setTimeout(() => {
            this.#loadingCtrl.dismiss();
            this.#movieRender.renderPopularMovies(movies);
            this.getUIBaseObjects();
            this.addUIEvents();
         }, 1000);
      } catch (error) {
         console.log(error);
      }

      //this.#movieRender.renderPopularMovies(movies);
      // fetch(api)
      //   .then((res) => res.json())
      //   .then((res) => {
      //     const movies = res.results;
      //     console.log(movies);
      //     this.#movieRender.renderPopularMovies(movies);
      //     this.getUIBaseObjects();
      //     this.addUIEvents();
      //   })
      //   .catch((err) => console.log(err));
   }

   async getUpcomingMovies() {
      // loading
      this.#loadingCtrl.present();

      const api = `${global.baseUrl}/movie/upcoming?api_key=${global.apiKey}`;
      try {
         const res = await axios.get(api);
         const movies = res.data.results;

         setTimeout(() => {
            this.#loadingCtrl.dismiss();
            this.#movieRender.renderUpcomingMovies(movies);
            this.getUIBaseObjects();
            this.addUIEvents();
         }, 1000);
      } catch (error) {
         console.log(error);
      }

      // fetch(api)
      //   .then((res) => res.json())
      //   .then((res) => {
      //     const movies = res.results;
      //     console.log(movies);
      //     this.#movieRender.renderUpcomingMovies(movies);
      //     this.getUIBaseObjects();
      //     this.addUIEvents();
      //   })
      //   .catch((err) => console.log(err));
   }

   getMovieDetail(movieId) {
      // loading
      const title = document.getElementById("title");
      title.innerText = "Loading data ...";

      const api = `${global.baseUrl}/movie/${movieId}?api_key=${global.apiKey}`;
      fetch(api)
         .then((res) => res.json())
         .then((res) => {
            const movie = res;
            console.log(movie);
            this.#movieRender.renderMovieDetail(movie);
         })
         .catch((err) => console.log(err));
   }

   getUIBaseObjects() {
      this.#ui = {};
      this.#ui.movies = document.getElementsByClassName("movie");
   }

   addUIEvents() {
      Array.from(this.#ui.movies).forEach((movie) => {
         movie.addEventListener("click", (ev) => {
            const id = ev.currentTarget.id;
            console.log("id", id);
            this.getMovieDetail(id);
         });
      });
   }
}
