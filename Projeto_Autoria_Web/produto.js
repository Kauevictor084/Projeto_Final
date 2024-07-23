// produto.js
class ProductCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    static get observedAttributes() {
      return ['title', 'price', 'description'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        this.render();
      }
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const title = this.getAttribute('title') || 'Produto';
      const price = this.getAttribute('price') || 'Preço';
      const description = this.getAttribute('description') || 'Descrição';
  
      this.shadowRoot.innerHTML = `
        <style>
          .card {
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
            padding: 20px;
          }
          .card-title {
            font-size: 1.5em;
            margin-bottom: 10px;
          }
          .card-price {
            font-size: 1.25em;
            color: #007bff;
            margin-bottom: 10px;
          }
          .card-description {
            font-size: 1em;
            color: #666;
          }
          img {
            max-width: 100%;
            border-radius: 8px;
            margin-bottom: 20px;
          }
        </style>
        <div class="card">
          <img src="imagens/pocof5.png" alt="${title}">
          <h5 class="card-title">${title}</h5>
          <p class="card-price">Preço: ${price}</p>
          <p class="card-description">${description}</p>
        </div>
      `;
    }
  }

  customElements.define('product-card', ProductCard);  
