/**
 * Screen Object for compensation/guard/create-villager.js
 * Mirrors app/src/app/compensation/guard/create-villager.jsx
 */
const { findByTestId } = require('../../../utils/driver.util');

const TEST_IDS = {
    // Screen-specific testIDs will be added as instrumented
};

class CreateVillagerScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    CreateVillagerScreen,
    TEST_IDS,
};
