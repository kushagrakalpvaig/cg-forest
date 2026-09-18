/**
 * Screen Object for compensation/guard/farmer-list.js
 * Mirrors app/src/app/compensation/guard/farmer-list.jsx
 */
const { findByTestId } = require('../../../utils/driver.util');

const TEST_IDS = {
    // Screen-specific testIDs will be added as instrumented
};

class FarmerListScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    FarmerListScreen,
    TEST_IDS,
};
