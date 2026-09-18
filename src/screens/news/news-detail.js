/**
 * Screen Object for news/news-detail.js
 * Mirrors app/src/app/news/news-detail.js
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    NEWS_DETAIL_BACK_BTN: 'news-detail.back.btn', // news-detail.back.btn
    NEWS_DETAIL_SHARE_BTN: 'news-detail.share.btn', // news-detail.share.btn
    NEWS_DETAIL_SEE_ALL_COMMENTS_BTN: 'news-detail.see-all-comments.btn', // news-detail.see-all-comments.btn
    NEWS_DETAIL_POST_COMMENT_BTN: 'news-detail.post-comment.btn', // postAComment
};

class NewsDetailScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get backBtn() {
        return findByTestId(this.driver, TEST_IDS.NEWS_DETAIL_BACK_BTN);
    }

    get shareBtn() {
        return findByTestId(this.driver, TEST_IDS.NEWS_DETAIL_SHARE_BTN);
    }

    get seeAllCommentsBtn() {
        return findByTestId(this.driver, TEST_IDS.NEWS_DETAIL_SEE_ALL_COMMENTS_BTN);
    }

    get postCommentBtn() {
        return findByTestId(this.driver, TEST_IDS.NEWS_DETAIL_POST_COMMENT_BTN);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    NewsDetailScreen,
    TEST_IDS,
};
