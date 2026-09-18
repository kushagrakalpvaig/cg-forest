/**
 * Screen Object for villagers/villagers-form.js
 * Mirrors app/src/app/villagers/villagers-form.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    // Screen-specific testIDs will be added as instrumented
};

class VillagersFormScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    VillagersFormScreen,
    TEST_IDS,
};
