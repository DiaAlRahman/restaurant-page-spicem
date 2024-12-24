import footer from './footer.js';

const contentBody = document.querySelector('#content');

// init homepage
// import homepage from "./init-html.js";
// for (let i = 0; i < homepage.length; i++) {
//   contentBody.appendChild(homepage[i])
// };
// contentBody.appendChild(footer);

// 
import menu from './menu.js';
new menu();
contentBody.appendChild(menu.displayNavBar)
contentBody.appendChild(menu.displayCurrentTab)
