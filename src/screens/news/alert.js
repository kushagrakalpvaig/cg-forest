/**
 * Screen Object for news/alert.js
 * Mirrors app/src/app/news/alert.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    NEWS_ALERT_BACK_BTN: 'news-alert.back.btn', // news-alert.back.btn
    NEWS_ALERT_LIST: 'news-alert.list', // news-alert.list
};

class AlertScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get backBtn() {
        return findByTestId(this.driver, TEST_IDS.NEWS_ALERT_BACK_BTN);
    }

    get list() {
        return findByTestId(this.driver, TEST_IDS.NEWS_ALERT_LIST);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    AlertScreen,
    TEST_IDS,
};
