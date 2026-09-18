/**
 * Screen Object for news/comments.js
 * Mirrors app/src/app/news/comments.js
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    NEWS_COMMENTS_BACK_BTN: 'news-comments.back.btn', // news-comments.back.btn
};

class CommentsScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get backBtn() {
        return findByTestId(this.driver, TEST_IDS.NEWS_COMMENTS_BACK_BTN);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    CommentsScreen,
    TEST_IDS,
};
