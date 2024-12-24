class Footer {
  // Method to create the div with spans
  static #createFooterDiv() {
    const div = document.createElement('div');
    div.className = 'upper-footer';

    const span1 = document.createElement('span');
    span1.textContent = 'Socials';

    const span2 = document.createElement('span');
    span2.textContent = 'Developed by Me';

    const span3 = document.createElement('span');
    span3.textContent = '© Spiceiem';

    // Append spans with separators
    div.appendChild(span1);
    div.appendChild(document.createTextNode(' | '));
    div.appendChild(span2);
    div.appendChild(document.createTextNode(' | '));
    div.appendChild(span3);

    return div;
  }

  // Method to create the paragraph
  static #createFooterParagraph() {
    const p = document.createElement('p');
    p.textContent = 'We are not in any way responsible for the pain caused by the noodles.';
    p.style.fontSize = 'smaller';
    p.style.color = 'gray';
    return p;
  }

  // Method to create the footer
  static render() {
    const footer = document.createElement('footer');
    footer.append(Footer.#createFooterDiv(), Footer.#createFooterParagraph());
    document.body.appendChild(footer);
  }
}

Footer.render()
