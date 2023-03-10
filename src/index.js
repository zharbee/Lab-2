class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="./index.css">
        <div id="title">
           <img id="ico" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Opera_GX_Icon.svg/2048px-Opera_GX_Icon.svg.png">
           <input id="search" type="text" placeholder="Buscar en la web" size=50>
        </div>`;
    }
}

customElements.define('app-container',AppContainer)