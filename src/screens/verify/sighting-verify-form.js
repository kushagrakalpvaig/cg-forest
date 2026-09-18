/**
 * Screen Object for verify/sighting-verify-form.js
 * Mirrors app/src/app/verify/sighting-verify-form.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    // Screen-specific testIDs will be added as instrumented
};

class SightingVerifyFormScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    SightingVerifyFormScreen,
    TEST_IDS,
};
