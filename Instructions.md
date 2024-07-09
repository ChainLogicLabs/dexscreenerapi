# Dexscreener Token Prices Scraper API

This project is a Node.js API that scrapes token prices from [Dexscreener](https://dexscreener.com) using Express, Axios, and Cheerio. The API provides an endpoint to fetch the latest token prices.

## Features

- Scrapes token prices from Dexscreener
- Provides a JSON response with token names and prices

## Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x)

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/dexscreener-scraper.git
    cd dexscreener-scraper
    ```

2. **Install the dependencies:**

    ```sh
    npm install
    ```

## Usage

1. **Start the server:**

    ```sh
    node server.js
    ```

2. **Access the API endpoint:**

    Open your browser or use a tool like Postman to navigate to:

    ```
    http://localhost:3000/api/token-prices
    ```

    This will return a JSON response containing token names and their prices.

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

Update Selectors

To ensure the API scrapes the correct data, you need to update the CSS selectors used in the code based on the actual HTML structure of Dexscreener. Follow these steps:

Inspect the HTML structure:

Open Dexscreener in your web browser.
Right-click on the token price elements and select "Inspect" to open the browser's Developer Tools.
Identify the classes or IDs associated with the token names and prices.
Update the selectors in the code:

Open server.js and modify the selectors used in the Cheerio scraping logic to match the HTML structure you inspected.

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/token-prices', async (req, res) => {
    try {
        const response = await axios.get('https://dexscreener.com/');
        const html = response.data;
        const $ = cheerio.load(html);

        // Example: Extract token prices (update selectors based on actual HTML structure)
        const tokenPrices = [];
        $('.token-container').each((i, element) => {
            const tokenName = $(element).find('.token-name').text();
            const tokenPrice = $(element).find('.token-price').text();
            tokenPrices.push({ tokenName, tokenPrice });
        });

        res.json(tokenPrices);
    } catch (error) {
        res.status(500).json({ error: 'Failed to scrape token prices' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

Notes

Web Scraping Considerations: Web scraping may violate the terms of service of the website. Ensure you have permission to scrape the content.
HTML Structure Changes: The HTML structure of Dexscreener may change, which would require updating the selectors in the code.

Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

License

This project is licensed under the MIT License - see the LICENSE file for details.