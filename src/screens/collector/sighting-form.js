/**
 * Screen Object for collector/sighting-form.js
 * Mirrors app/src/app/collector/sighting-form.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    // Screen-specific testIDs will be added as instrumented
};

class SightingFormScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    SightingFormScreen,
    TEST_IDS,
};
