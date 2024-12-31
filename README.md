# Restaurant Page Project

This project is a simple restaurant webpage inspired by my Grade 8 Business Week poster. It showcases a clean and organized structure with dynamically generated content using JavaScript. The project is modular, compiled with Webpack, and demonstrates the effective use of imports and event listeners.

---

## Features

- **Dynamic Content Generation:** Pages and tabs are created dynamically through JavaScript.
- **Modular Codebase:** The code is split into logical modules:
  - Separate files for `header.js`, `footer.js`, and individual tabs.
  - Utilization of classes for internal organization within files.
- **Event-Driven Design:** Each tab includes an event listener that dynamically updates the current page without reloading.
- **Webpack Compilation:** Production code is compiled using Webpack, ensuring efficient deployment.
- **Ease of Debugging:** Thanks to a well-organized structure, pinpointing and resolving issues is straightforward.
- **Modern JavaScript Practices:** Incorporates side-effect imports, default imports, and named imports for clarity and maintainability.

---

## Running Instructions

### Clone the `gh-pages` Branch and Serve Locally

The `gh-pages` branch typically contains the static files necessary for your website. To run it locally:

1. **Clone the `gh-pages` Branch:**
   ```bash
   git clone --branch gh-pages https://github.com/<your-username>/restaurant-page.git
   ```
   Replace `<your-username>` with your GitHub username.

2. **Navigate to the Project Directory:**
   ```bash
   cd restaurant-page
   ```

3. **Serve the Static Files:**
   Use Node.js with the `http-server` package:
   ```bash
   npm install -g http-server
   http-server . -p 8000
   ```
   After running the server, open your browser and navigate to `http://localhost:8000` to view the project.

---

## Why This Project Stands Out

- **Clean Architecture:** The codebase is structured for readability and maintenance.
- **Seamless Development Workflow:** Easy identification of issues during development.
- **Inspiration:** A nostalgic recreation of a Grade 8 project, showcasing growth and creativity.

Enjoy exploring this dynamic and modular restaurant page! 😊

