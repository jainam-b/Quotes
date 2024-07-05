# Quotes App

This is a simple React application that displays random quotes from Ron Swanson. The app allows users to save their favorite quotes to local storage so they persist even after a page reload.

## Features

- Fetch random quotes from the  (https://ron-swanson-quotes.herokuapp.com/v2/quotes).
- Display the quote in a styled card.
- Save quotes to local storage.
- Display saved quotes in a list.

## Demo

Check out the live demo of the app on Vercel:  (https://jainam-b-quotes.vercel.app/)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/ron-swanson-quotes-app.git
    cd ron-swanson-quotes-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Open your browser and visit `http://localhost:3000` to see the app.

## Code Overview

### Dependencies

- React: A JavaScript library for building user interfaces.
- Axios: A promise-based HTTP client for making requests to the API.

### Component Structure

- `App`: The main component that fetches and displays the quote, and handles saving quotes to local storage.

 

## Usage

1. When you open the app, it fetches a random quote from the API and displays it in a card.
2. Click on the bookmark icon to save the current quote to the list of saved quotes.
3. The saved quotes are displayed below the main card.
4. The quotes are stored in local storage, so they persist even if you reload the page.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

If you have suggestions for improving the app, feel free to submit a pull request or open an issue.

## Author

- [Jainam Bagrecha ](https://github.com/jainam-b)
