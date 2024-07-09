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