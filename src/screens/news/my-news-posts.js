/**
 * Screen Object for news/my-news-posts.js
 * Mirrors app/src/app/news/my-news-posts.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    MY_NEWS_POSTS_BACK_BTN: 'my-news-posts.back.btn', // my-news-posts.back.btn
    MY_NEWS_POSTS_LIST: 'my-news-posts.list', // my-news-posts.list
    MY_NEWS_POSTS_ADD_BTN: 'my-news-posts.add.btn', // my-news-posts.add.btn
};

class MyNewsPostsScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get backBtn() {
        return findByTestId(this.driver, TEST_IDS.MY_NEWS_POSTS_BACK_BTN);
    }

    get list() {
        return findByTestId(this.driver, TEST_IDS.MY_NEWS_POSTS_LIST);
    }

    get addBtn() {
        return findByTestId(this.driver, TEST_IDS.MY_NEWS_POSTS_ADD_BTN);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    MyNewsPostsScreen,
    TEST_IDS,
};
