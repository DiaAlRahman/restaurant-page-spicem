import homepage from "./init-html.js";
import footer from './footer.js';

const contentBody = document.querySelector('#content');
for (let i = 0; i < homepage.length; i++) {
  contentBody.appendChild(homepage[i])
};
contentBody.appendChild(footer);