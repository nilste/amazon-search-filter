// ==UserScript==
// @name         Amazon search filter
// @author       Stefan Nilsson
// @match        https://www.amazon.se/s?*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @require      https://gist.githubusercontent.com/nilste/9e0765190d614eec1d6ecae0b057fa7f/raw/8cdb4587bc32ee130894e94c408d9ad5a870bd5a/waitForKeyElements.js
// @grant        none
// ==/UserScript==

function filterResults() {
    // Products to remove from the results
    const patterns = [
        '[aria-label="Tillfälligt slut."]',
        '[aria-label$="kr frakt"]'
    ];

    const products = document.querySelectorAll('div[data-asin');

    for (const product of products) {
        for (const pattern of patterns) {
            if (product.querySelector(pattern) !== null) {
                product.remove();
                break;
            }
        }
    }
};

// Wait for bottom page navigation to load
waitForKeyElements (".a-pagination", filterResults);