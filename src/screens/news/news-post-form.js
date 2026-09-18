/**
 * Screen Object for news/news-post-form.js
 * Mirrors app/src/app/news/news-post-form.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    NEWS_POST_FORM_BACK_BTN: 'news-post-form.back.btn', // news-post-form.back.btn
};

class NewsPostFormScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get backBtn() {
        return findByTestId(this.driver, TEST_IDS.NEWS_POST_FORM_BACK_BTN);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    NewsPostFormScreen,
    TEST_IDS,
};
