class Header {
  static #displayLogo() {
    const header = document.createElement('header');
    const linkHome = document.createElement('a');

    // Set text and attributes for the logo link
    linkHome.textContent = "Spiciem";
    linkHome.setAttribute('href', '/');
    linkHome.setAttribute('aria-label', 'Homepage');

    // Append link to header
    header.appendChild(linkHome);

    return header;
  }

  static render() {
    const header = this.#displayLogo();
    document.body.prepend(header); // Add the header at the top of the page
  }
}

// Call the render method to display the header
Header.render();
