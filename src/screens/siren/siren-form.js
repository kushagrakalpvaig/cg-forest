/**
 * Screen Object for siren/siren-form.js
 * Mirrors app/src/app/siren/siren-form.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    // Screen-specific testIDs will be added as instrumented
};

class SirenFormScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    SirenFormScreen,
    TEST_IDS,
};
