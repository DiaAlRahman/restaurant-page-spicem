import './style.css';
import './header.js';
import homepage from "./homepage.js";
import menu from './menu.js';
import contact from './contact.js';
import './footer.js';

// init homepage
// import homepage from "./homepage.js";
// contentBody.appendChild(homepage.display)

// init menu
// new menu();
// contentBody.appendChild(menu.displayNavBar)
// contentBody.appendChild(menu.displayCurrentTab)

// init contact us 
// contentBody.appendChild(contact);

class Switch {
  constructor(contentBody) {
    this.contentBody = contentBody;
  }
  toHomepage = () => {
    this.contentBody.replaceChildren(homepage.display);
  }
  toMenu = () => {
    new menu();
    this.contentBody.replaceChildren(menu.displayNavBar, menu.displayCurrentTab);
  }
  toContactUs = () => {
    this.contentBody.replaceChildren(contact);
  }
}


function createTab(name, function_) {
  const button = document.createElement('button');
  button.textContent = name;
  button.addEventListener('click', function () {
    function_();
  });
  return button;
}

const mainNavbar = document.querySelector('#mainTabs');
const currentTab = new Switch(document.querySelector('#content'));
currentTab.toHomepage();

const homepageTab = createTab('Home', currentTab.toHomepage);
const menuTab = createTab('Menu', currentTab.toMenu);
const contactTab = createTab('Contact Us', currentTab.toContactUs);

mainNavbar.append(homepageTab, menuTab, contactTab);


