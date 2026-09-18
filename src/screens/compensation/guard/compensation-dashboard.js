/**
 * Screen Object for compensation/guard/compensation-dashboard.js
 * Mirrors app/src/app/compensation/guard/compensation-dashboard.jsx
 */
const { findByTestId } = require('../../../utils/driver.util');

const TEST_IDS = {
    // Screen-specific testIDs will be added as instrumented
};

class CompensationDashboardScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    CompensationDashboardScreen,
    TEST_IDS,
};
