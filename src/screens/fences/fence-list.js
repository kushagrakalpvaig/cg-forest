/**
 * Screen Object for fences/fence-list.js
 * Mirrors app/src/app/fences/fence-list.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    FENCES_CLUSTER_TOGGLE_BTN: 'fences.cluster-toggle.btn', // Toggle cluster button
    FENCES_ADD_BTN: 'fences.add.btn', // Add fence button
    FENCES_CONTINUE_BTN: 'fences.continue.btn', // Select fence area continue button
};

class FenceListScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get clusterToggleBtn() {
        return findByTestId(this.driver, TEST_IDS.FENCES_CLUSTER_TOGGLE_BTN);
    }

    get addBtn() {
        return findByTestId(this.driver, TEST_IDS.FENCES_ADD_BTN);
    }

    get continueBtn() {
        return findByTestId(this.driver, TEST_IDS.FENCES_CONTINUE_BTN);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    FenceListScreen,
    TEST_IDS,
};
