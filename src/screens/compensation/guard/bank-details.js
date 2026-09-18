/**
 * Screen Object for compensation/guard/bank-details.js
 * Mirrors app/src/app/compensation/guard/bank-details.jsx
 */
const { findByTestId } = require('../../../utils/driver.util');

const TEST_IDS = {
    // Screen-specific testIDs will be added as instrumented
};

class BankDetailsScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    BankDetailsScreen,
    TEST_IDS,
};
