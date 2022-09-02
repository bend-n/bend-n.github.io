customElements.define(
  "download-button",
  class extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      if (!this.hasAttribute("game")) throw new Error("no game specified");
      const game = this.getAttribute("game");
      this.innerHTML = `
<button class="button download_button" onclick="openDownloadPopup('${game}')">
  <i class="fa-solid fa-download"></i> download
</button>`;
    }
  }
);

function openDownloadPopup(game) {
  const w = 680;
  const h = 400;
  const win = window.open(
    `https://bendn.itch.io/${game}/purchase?popup=1`,
    "purchase",
    `scrollbars=1, resizable=no, width=${w}, height=${h}, top=${
      (screen.height - h) / 2
    }, left=${(screen.width - w) / 2}`
  );
  if (typeof win.focus === "function") {
    win.focus();
  }
}
