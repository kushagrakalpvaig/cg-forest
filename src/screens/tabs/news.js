/**
 * Screen Object for tabs/news.js
 * Mirrors app/src/app/tabs/news.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    NEWS_LIST: 'news.list', // news.list
};

class NewsScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get list() {
        return findByTestId(this.driver, TEST_IDS.NEWS_LIST);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    NewsScreen,
    TEST_IDS,
};
