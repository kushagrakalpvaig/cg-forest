/**
 * Screen Object for compensation/claim-details-view.js
 * Mirrors app/src/app/compensation/claim-details-view.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    // Screen-specific testIDs will be added as instrumented
};

class ClaimDetailsViewScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    ClaimDetailsViewScreen,
    TEST_IDS,
};
