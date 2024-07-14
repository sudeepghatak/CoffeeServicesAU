class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        fetch('header.html')
            .then(response => response.text())
            .then(data => {
                this.shadowRoot.innerHTML = data;
            })
            .catch(error => console.error('Error loading the header:', error));
    }
}

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
            .catch(error => console.error('Error loading the footer:', error));
    }
}
customElements.define('header-component', HeaderComponent);
customElements.define('footer-component', FooterComponent);
customElements.define('sticky-component', StickyComponent);