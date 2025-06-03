# Cat Fact Fetcher

A simple React-based web application that fetches and displays a random cat fact from the [Cat Facts API](https://catfact.ninja/fact) when a button is clicked. This project was built as a frontend challenge to demonstrate the use of React with async/await for API calls, providing a clean and minimal user interface.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features
- **Single Button Interaction**: Click a button to fetch a random cat fact.
- **Async/Await API Call**: Uses modern JavaScript `fetch` with `async/await` for smooth API integration.
- **Loading State**: Displays a "Loading..." message while fetching the fact.
- **Error Handling**: Gracefully handles API errors by displaying a fallback message.
- **Responsive Design**: Simple and clean UI that works across devices.

## Demo
You can see the app in action by cloning the repository and running it locally (instructions below). The app displays a centered button that, when clicked, fetches and shows a random cat fact below it.

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/)
- A modern web browser (e.g., Chrome, Firefox)

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/cat-fact-fetcher.git
   cd cat-fact-fetcher
   ```

2. **Install Dependencies**:
   Using npm:
   ```bash
   npm install
   ```
   Or using Yarn:
   ```bash
   yarn install
   ```

3. **Start the Development Server**:
   Using npm:
   ```bash
   npm start
   ```
   Or using Yarn:
   ```bash
   yarn start
   ```

   The app will automatically open in your default browser at `http://localhost:3000`.

## Usage
1. Open the app in your browser.
2. Click the **Get Cat Fact** button to fetch a random cat fact.
3. The fact will appear below the button. If the API call is in progress, the button will display "Loading...".
4. If an error occurs (e.g., network issue), a fallback message will be shown.
5. Click the button again to fetch a new fact!

## Technologies Used
- **React**: Frontend library for building the user interface.
- **JavaScript (ES6+)**: For modern syntax and async/await API calls.
- **HTML/CSS**: For basic structure and styling.
- **Fetch API**: Built-in browser API for making HTTP requests.
- **Create React App**: Boilerplate used to set up the project.

## API Reference
This project uses the [Cat Facts API](https://catfact.ninja/fact) to fetch random cat facts. The API is simple and requires no authentication.

- **Endpoint**: `GET https://catfact.ninja/fact`
- **Response Example**:
  ```json
  {
    "fact": "Cats can jump up to six times their length.",
    "length": 38
  }
  ```
- The app extracts the `fact` field and displays it on the page.

## Contributing
Contributions are welcome! If you'd like to improve this project, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a Pull Request with a description of your changes.

Please ensure your code follows the existing style and includes appropriate comments.

## License
This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as you see fit.

## Acknowledgements
- Thanks to [Cat Facts API](https://catfact.ninja/) for providing a fun and free API to work with.
- Inspired by frontend coding challenges to practice React and API integration.
- Built with love for cats and clean code! 🐾

---

Happy coding, and enjoy your random cat facts! 😺