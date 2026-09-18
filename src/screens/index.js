/**
 * Screen Object for index.js
 * Mirrors app/src/app/index.jsx
 */
const { findByTestId } = require('../utils/driver.util');

const TEST_IDS = {
    SPLASH_LOGO_IMG: 'splash.logo.img', // splash.logo.img
};

class IndexScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get logoImg() {
        return findByTestId(this.driver, TEST_IDS.SPLASH_LOGO_IMG);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    IndexScreen,
    TEST_IDS,
};
