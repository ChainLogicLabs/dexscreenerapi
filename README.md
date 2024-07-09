# Dexscreener Token Prices Scraper API

This project is a Node.js API designed to scrape token prices from [Dexscreener](https://dexscreener.com) using Express, Axios, and Cheerio. The API provides a simple endpoint to fetch the latest token prices in JSON format.

## Features

- Scrapes token prices from Dexscreener
- Provides a JSON response with token names and prices
- Built with Node.js, Express, Axios, and Cheerio

## Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/dexscreener-scraper.git
    cd dexscreener-scraper
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

## Usage

1. Start the server:

    ```sh
    node server.js
    ```

2. Access the API endpoint in your browser or through a tool like Postman:

    ```
    http://localhost:3000/api/token-prices
    ```

## Example Response

```json
[
    {
        "tokenName": "Token A",
        "tokenPrice": "$123.45"
    },
    {
        "tokenName": "Token B",
        "tokenPrice": "$67.89"
    }
]

Configuration

To ensure the API scrapes the correct data, you need to update the CSS selectors used in the code based on the actual HTML structure of Dexscreener. Inspect the elements on the Dexscreener webpage to find the correct classes or IDs for token names and prices.

Notes

Web scraping may violate the terms of service of the website. Ensure you have permission to scrape the content.
The HTML structure of Dexscreener may change, which would require updating the selectors in the code.

Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

License

This project is licensed under the MIT License - see the LICENSE file for details.