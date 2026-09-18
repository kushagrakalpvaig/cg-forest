/**
 * Screen Object for dal/dal-details.js
 * Mirrors app/src/app/dal/dal-details.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    DAL_DETAILS_TIMELINE_LIST: 'dal-details.timeline.list', // DAL herd timeline list
};

class DalDetailsScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get timelineList() {
        return findByTestId(this.driver, TEST_IDS.DAL_DETAILS_TIMELINE_LIST);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    DalDetailsScreen,
    TEST_IDS,
};
