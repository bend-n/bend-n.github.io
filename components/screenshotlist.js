customElements.define(
  "screenshot-list",
  class extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      if (!this.hasAttribute("images")) throw new Error("no images supplied");
      const images = this.getAttribute("images").split(" ");
      let imgs = "";
      images.forEach((image) => {
        imgs += `<img class="screenshot" src="${image}"></img>`;
      });
      const style = `
      .screenshot {
        max-width: 350px;
      }
      
      .screenshot_list {
        text-align: center;
        overflow-x: scroll;
      }`;
      const html = `
      <style>${style}</style>
      <div class=screenshot_list>${imgs}\n</div>`;
      this.innerHTML = html;
      console.log(html);
    }
  }
);
