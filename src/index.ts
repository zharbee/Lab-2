import "./components/index.ts";

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){this.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="./index.css">
        <div id="screen">
          <div id="title">
           <img id="ico" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Opera_GX_Icon.svg/2048px-Opera_GX_Icon.svg.png">
           <input id="search" type="text" placeholder="Buscar en la web" size=50>
          </div>
         
          <window-view></window-view>
          
        </div>
        `;}
    }
}

customElements.define('app-container',AppContainer)