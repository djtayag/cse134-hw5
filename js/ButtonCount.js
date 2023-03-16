class ButtonCount extends HTMLElement {
    constructor() {
      super();
      
      // shadow root
      const shadow = this.attachShadow({mode: 'open'});
      
      // button elem
      const button = document.createElement('button');
      button.textContent = 'Times Clicked: 0';
      button.style.padding = '8px 16px';
      button.style.fontSize = '16px';
      button.style.cursor = 'pointer';
      
      // click functionality w counter
      let count = 0;
      button.addEventListener('click', () => {
        count++;
        button.textContent = `Times Clicked: ${count}`;
      });
      
      shadow.appendChild(button);
    }
  }
  
  customElements.define('button-count', ButtonCount);
  