/**
 * Screen Object for help/my-reports.js
 * Mirrors app/src/app/help/my-reports.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    MY_REPORTS_BACK_BTN: 'my-reports.back.btn', // my-reports.back.btn
    MY_REPORTS_LIST: 'my-reports.list', // my-reports.list
};

class MyReportsScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get backBtn() {
        return findByTestId(this.driver, TEST_IDS.MY_REPORTS_BACK_BTN);
    }

    get list() {
        return findByTestId(this.driver, TEST_IDS.MY_REPORTS_LIST);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    MyReportsScreen,
    TEST_IDS,
};
