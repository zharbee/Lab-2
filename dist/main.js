(()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=document.createElement("section"),t=document.createElement("h2");t.textContent="Twitch TV",e.appendChild(t),this.shadowRoot.appendChild(e)}}customElements.define("app-container",e)})();