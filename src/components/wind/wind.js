class Windowview extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML=``;
        for(let i=1;i<=13;i++){
            this.shadowRoot.innerHTML+=`
            <link rel="stylesheet" href="./index.css">
            <div id="cub">
            <img id="tumb" src="https://i.pinimg.com/originals/cd/57/fa/cd57fad1722780e333f2c762529a9173.jpg">
            <b>
            App
            </b>
            </div>
            `
        }
        this.shadowRoot.innerHTML+=`
            <link rel="stylesheet" href="./index.css">
            <div id="cub-add">
            <img id="tumb" src="https://wallpaper.dog/large/73840.jpg">
            
            </div>
            `
    }
}

customElements.define('window-view',Windowview)