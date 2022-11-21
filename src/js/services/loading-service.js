export class LoadingService {
   #message;
   #spinner;
   #id;
   #ui;
   constructor({ message = "Loading...", spinner = "spinner" } = {}) {
      this.#message = message;
      this.#spinner = spinner;
      this.#id = "loading";
      this.#ui = {};
   }

   #renderLoadingHtml() {
      document.body.insertAdjacentHTML("beforeend", this.#getLoadingHtml());
      this.#ui.loading = document.getElementById(this.#id);
   }

   #getLoadingHtml() {
      return `
      <div id="${this.#id}" class="${this.#id}">
            <div id="${this.#id}__message">${this.#message}</div>
            <div id="${this.#id}__spinner" class="${this.#spinner}"></div>
      </div>`;
   }

   present() {
      this.#renderLoadingHtml();
   }

   dismiss() {
      if (this.#ui.loading.parentNode) {
         //this.#ui.loading.parentNode.removeChild(this.#ui.loading);
      }
   }
}
