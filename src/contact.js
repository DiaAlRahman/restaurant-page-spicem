class Contact {
  static #content = document.createElement('section')
  static #addContent(textContent_, htmlTag) {
    const content = document.createElement(htmlTag);
    content.textContent = textContent_;
    Contact.#content.appendChild(content);
  }
  static createContent() {
    Contact.#content.className = 'contact-us'
    Contact.#addContent('Find us Here', 'h2');
    Contact.#addContent('School Time - Weekdays Only', 'p');
    Contact.#addContent('Jeddah, Saudi Arabia', 'p');

    return Contact.#content;
  };
};
export default Contact.createContent();
