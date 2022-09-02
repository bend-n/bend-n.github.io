customElements.define(
  "back-button",
  class extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
<style>
  .back_button {
    position: fixed;
    margin: 15px;
    z-index: 100;
  }
</style>

<button class="button back_button" onclick="goBack()">
  <i class="fa-solid fa-caret-left"></i> back
</button>`;
    }
  }
);

function goBack() {
  if (typeof window.history.back() == "undefined")
    window.location = "/index.html";
}
