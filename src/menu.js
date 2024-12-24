class ProductCards {
  constructor() {
    this.productCards = []
    this.productCardsDisplay = document.createElement('section');
    this.productCardsDisplay.className = 'productCards';
  };

  addNewCard(name, description, image = null) {
    const productcard = new ProductCard(name, description, image);
    this.productCards.push(productcard);
    this.productCardsDisplay.appendChild(productcard.createHTML())
  };

  get display() {
    return this.productCardsDisplay
  }
};

class ProductCard {
  constructor(name, description, image = null) {
    this.name = name;
    this.description = description;
    this.image = image;
  }
  createHTML() {
    // Create an article element for the product card
    const card = document.createElement('article');
    card.classList.add('productCard');

    // Create and append the name element (use header for prominence)
    const header = document.createElement('header');
    const nameElement = document.createElement('h2');
    nameElement.textContent = this.name;
    header.appendChild(nameElement);
    card.appendChild(header);

    // Optionally create and append the image element
    if (this.image) {
      const figure = document.createElement('figure');
      const imageElement = document.createElement('img');
      imageElement.src = this.image;
      imageElement.alt = `${this.name} image`;

      const figCaption = document.createElement('figcaption');
      figCaption.textContent = this.name;

      figure.appendChild(imageElement);
      figure.appendChild(figCaption);
      card.appendChild(figure);
    }

    // Create and append the description element (use main content container)
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = this.description;
    card.appendChild(descriptionElement);

    return card;
  }
};

function createButtonHTML(name, button_fn) {
  const button = document.createElement('button');
  button.textContent = name;
  button.addEventListener('click', button_fn);
  return button;
}

class Tabs {
  constructor() {
    if (!Tabs.navBar) {
      Tabs.navBar = document.createElement('nav');
      Tabs.navBar.style.display = 'flex';  // Align buttons horizontally
      Tabs.navBar.style.gap = '10px';      // Space between the buttons
      Tabs.navBar.style.padding = '10px';  // Add some padding to the nav bar
      Tabs.navBar.style.backgroundColor = '#333'; // Background color for the nav bar
    }
    if (!Tabs.currentTab) {
      Tabs.currentTab = document.createElement('section');
      Tabs.currentTab.className = 'currentTab';
    }
  };
  static #firstRun = false;
  static #displayMainMeals() {
    const productCards = new ProductCards()
    productCards.addNewCard('Spicy Noodles', 'Challenge');
    productCards.addNewCard('Fuchkas', 'Deshi');
    productCards.addNewCard('Hotdogs', 'It has a good personality!');

    Tabs.currentTab.replaceChildren(productCards.display);
  };

  static #displaySides() {
    const productCards = new ProductCards();
    productCards.addNewCard('Fries', 'Get them soggy or crispy!');
    productCards.addNewCard('Curly Fries', 'For all you straight folks!');
    productCards.addNewCard('Eggs', 'For them fuchkas');

    Tabs.currentTab.replaceChildren(productCards.display);
  };

  static #displayDrinks() {
    const productCards = new ProductCards();
    productCards.addNewCard('Cade Green', 'A refreshing, minty drink that cools you down.');
    productCards.addNewCard('Blue', 'A sweet, berry-infused delight with a vibrant hue.');
    productCards.addNewCard('Red Grape', 'Rich and tangy, bursting with the flavor of fresh grapes.');
    productCards.addNewCard('Pink', 'A smooth, fruity mix with a subtle pink color and a sweet taste.');
    productCards.addNewCard('Apple', 'Crisp, juicy apple flavor in every sip.');
    productCards.addNewCard('Apple and Mango Juice', 'A tropical blend of tart apples and sweet mangoes.');

    Tabs.currentTab.replaceChildren(productCards.display);
  };

  static #displaySauces() {
    const productCards = new ProductCards();
    productCards.addNewCard('Tangy Tamarind', 'A sweet and sour sauce with a bold, tangy flavor.');
    productCards.addNewCard('Classic Ketchup', 'A timeless, tomato-based sauce with a hint of sweetness.');
    productCards.addNewCard('Sharp Mustard', 'A zesty, mustard-based sauce with a sharp, tangy bite.');
    productCards.addNewCard('Hot Shatta', 'A spicy and fiery sauce that adds heat to any dish.');

    Tabs.currentTab.replaceChildren(productCards.display);
  };

  static allTabsHTML() {
    // Create the buttons
    const mainMealsButton = createButtonHTML('Main Meals', Tabs.#displayMainMeals);
    const sidesButton = createButtonHTML('Sides', Tabs.#displaySides);
    const drinksButton = createButtonHTML('Drinks', Tabs.#displayDrinks);
    const saucesButton = createButtonHTML('Sauces', Tabs.#displaySauces);

    Tabs.navBar.append(mainMealsButton, sidesButton, drinksButton, saucesButton);
  };

  static get displayCurrentTab() {
    if (!this.#firstRun) {
      Tabs.#displayMainMeals();
      this.#firstRun = true;
    }
    return Tabs.currentTab;
  }
  static get displayNavBar() {
    if (!this.#firstRun) {
      Tabs.allTabsHTML();
    }
    return Tabs.navBar;
  }
};

export default Tabs;


