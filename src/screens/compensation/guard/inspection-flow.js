/**
 * Screen Object for compensation/guard/inspection-flow.js
 * Mirrors app/src/app/compensation/guard/inspection-flow.jsx
 */
const { findByTestId } = require('../../../utils/driver.util');

const TEST_IDS = {
    // Screen-specific testIDs will be added as instrumented
};

class InspectionFlowScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    InspectionFlowScreen,
    TEST_IDS,
};
