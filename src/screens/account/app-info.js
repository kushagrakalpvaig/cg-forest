/**
 * Screen Object for account/app-info.js
 * Mirrors app/src/app/account/app-info.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    APP_INFO_BACK_BTN: 'app-info.back.btn', // app-info.back.btn
    APP_INFO_WEBSITE_LINK: 'app-info.website.link', // app-info.website.link
    APP_INFO_EMAIL_LINK: 'app-info.email.link', // app-info.email.link
};

class AppInfoScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get backBtn() {
        return findByTestId(this.driver, TEST_IDS.APP_INFO_BACK_BTN);
    }

    get websiteLink() {
        return findByTestId(this.driver, TEST_IDS.APP_INFO_WEBSITE_LINK);
    }

    get emailLink() {
        return findByTestId(this.driver, TEST_IDS.APP_INFO_EMAIL_LINK);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    AppInfoScreen,
    TEST_IDS,
};
