

class FooterComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                this.shadowRoot.innerHTML = data;
            })
            .catch(error => console.error('Error loading the footer:', error));
    }
}

class StickyComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        fetch('sticky.html')
            .then(response => response.text())
            .then(data => {
                this.shadowRoot.innerHTML = data;
            })
            .catch(error => console.error('Error loading the sticky:', error));
    }
}

customElements.define('footer-component', FooterComponent);
customElements.define('sticky-component', StickyComponent);
