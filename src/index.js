import footer from './footer.js';

const contentBody = document.querySelector('#content');

// init homepage
import homepage from "./init-html.js";
contentBody.appendChild(homepage.display)
contentBody.appendChild(footer);

// init menu
import menu from './menu.js';
new menu();
contentBody.appendChild(menu.displayNavBar)
contentBody.appendChild(menu.displayCurrentTab)
contentBody.appendChild(footer);


