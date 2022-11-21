export class LoadingService {
   #message;
   #spinner;
   #ui;
   constructor({ message = "Loading...", spinner = "spinner" } = {}) {
      this.#message = message;
      this.#spinner = spinner;
      this.#ui = {};
      this.#setUI();
   }

   #setUI() {
      this.#ui.loading = document.getElementById("loading");

      this.#ui.message = document.getElementById("loading__message");
      this.#ui.message.innerText = this.#message;

      this.#ui.spinner = document.getElementById("loading__spinner");
      this.#ui.spinner.className = this.#spinner;
   }

   present() {
      this.#ui.loading.style.display = "flex";
   }

   dismiss() {
      //this.#ui.loading.style.display = "none";
   }
}
