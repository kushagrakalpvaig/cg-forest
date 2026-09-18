/**
 * Screen Object for hanthi-mitra/mitra-list.js
 * Mirrors app/src/app/hanthi-mitra/mitra-list.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    MITRA_LIST_LIST: 'mitra-list.list', // Hanthi mitra list
    MITRA_LIST_ADD_BTN: 'mitra-list.add.btn', // Add hanthi mitra button
    MITRA_FORM_NAME_INPUT: 'mitra-form.name.input', // Mitra name input
    MITRA_FORM_MOBILE_INPUT: 'mitra-form.mobile.input', // Mitra mobile contact input
    MITRA_FORM_SUBMIT_BTN: 'mitra-form.submit.btn', // Submit mitra button
};

class MitraListScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get list() {
        return findByTestId(this.driver, TEST_IDS.MITRA_LIST_LIST);
    }

    get addBtn() {
        return findByTestId(this.driver, TEST_IDS.MITRA_LIST_ADD_BTN);
    }

    get nameInput() {
        return findByTestId(this.driver, TEST_IDS.MITRA_FORM_NAME_INPUT);
    }

    get mobileInput() {
        return findByTestId(this.driver, TEST_IDS.MITRA_FORM_MOBILE_INPUT);
    }

    get submitBtn() {
        return findByTestId(this.driver, TEST_IDS.MITRA_FORM_SUBMIT_BTN);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    MitraListScreen,
    TEST_IDS,
};
