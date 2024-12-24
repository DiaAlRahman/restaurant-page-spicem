class FeaturedProduct {
  static allProducts = [];
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;

    FeaturedProduct.allProducts.push(this);
  }
  static getProducts() {
    return FeaturedProduct.allProducts;
  }
}

const InitFeaturedProducts = (() => {
  new FeaturedProduct('Cade, limited edition drinks', '5 different flavours: Green, Blue, Red Grape, Pink, and Apple. So, hurry up and come before all these sells out.', '5 SAR');
  new FeaturedProduct("Spicy Noodeles", "No water, no milk, only spice! Have your friends come over and let the mouth-burning sensation begin! Let's see how much heat you can take! We have found the rarest and the spiciect noodles imported from Korea. This mouth-burning noodles measures up-to 9000 Scollville(SHU).", '10 SAR');
  new FeaturedProduct('Fuchkas', "Come with your firends to chop on some fuchkas. Starting from only 5 riyals, it's not the mouth-burning fuchkas; it's just the plain old traditional fuchkas that everyone loves. We will be serving it with chilli water and tamarind water.", '5 SAR');
})();

class DisplayController {
  static #createParagraphs(parentNode, text, WordLimit) {
    const words = text.split(' ');
    for (let i = 0; i < words.length; i += WordLimit) {
      const paragraphText = words.slice(i, i + WordLimit).join(' ');
      const p = document.createElement('p');
      p.textContent = paragraphText;

      parentNode.appendChild(p);
    };
  };

  static #displayLogo() {
    const header = document.createElement('header');
    const linkHome = document.createElement('a');
    // add image for logo later on

    linkHome.textContent = "Spiciem";
    linkHome.setAttribute('href', '/');
    linkHome.setAttribute('aria-label', 'Homepage');
    header.appendChild(linkHome)

    return header;
  };

  static #displayIntro() {
    const article = document.createElement('article');
    const introductionText = 'Come to our restaurant and have fun with your friends! We serve high quality food and make it a little extra spicy. Be sure to come and always try to enjoy your life!'

    DisplayController.#createParagraphs(article, introductionText, 45);

    return article;
  };

  static #displayFeaturedProducts() {
    // Create a container for the products
    const section = document.createElement('section');
    section.className = 'featured-products';

    // Iterate over all products and create HTML for each
    FeaturedProduct.allProducts.forEach(product => {
      // Create a product card
      const productCard = document.createElement('article');
      productCard.className = 'product-card';

      // Create and append product name
      const name = document.createElement('h2');
      name.textContent = product.name;
      productCard.appendChild(name);

      // Create and append product description
      DisplayController.#createParagraphs(productCard, product.description, 10);

      // Create and append product price
      const price = document.createElement('p');
      price.textContent = `Price: $${product.price}`;
      productCard.appendChild(price);

      // Append the product card to the container
      section.appendChild(productCard);
    });

    // Return the container (or append it to the DOM directly if needed)
    return section;
  };

  static get display() {
    const content = document.createElement('section');
    content.className = 'homepage';
    const logo = this.#displayLogo();
    const intro = this.#displayIntro();
    const featuredProducts = this.#displayFeaturedProducts();

    content.append(logo, intro, featuredProducts);
    return content;
  };
};

// console.log(DisplayController.createContent())

// const contentBody = document.querySelector('section#content');
// contentBody.append(DisplayController.displayLogo(), DisplayController.displayIntro(), DisplayController.displayFeaturedProducts());
// document.body.append(Footer.createFooter());
export default DisplayController;
