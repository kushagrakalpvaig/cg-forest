/**
 * Screen Object for compensation/guard/land-details.js
 * Mirrors app/src/app/compensation/guard/land-details.jsx
 */
const { findByTestId } = require('../../../utils/driver.util');

const TEST_IDS = {
    // Screen-specific testIDs will be added as instrumented
};

class LandDetailsScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    LandDetailsScreen,
    TEST_IDS,
};
