/**
 * Screen Object for siren/siren-list.js
 * Mirrors app/src/app/siren/siren-list.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    SIREN_LIST: 'siren.list', // Siren list
    SIREN_SWITCH_TO_MAP_BTN: 'siren.switch-to-map.btn', // Switch to map view button
    SIREN_SWITCH_TO_LIST_BTN: 'siren.switch-to-list.btn', // Switch to list view button
    SIREN_CLUSTER_TOGGLE_BTN: 'siren.cluster-toggle.btn', // Toggle siren cluster button
    SIREN_ADD_BTN: 'siren.add.btn', // Add siren button
    SIREN_MAP_ADD_BTN: 'siren.map-add.btn', // Add siren map button
    SIREN_FORM_QR_SCANNER: 'siren-form.qr-scanner', // Scan siren QR code scanner
    SIREN_FORM_SUBMIT_AND_TEST_BTN: 'siren-form.submit-and-test.btn', // Submit and test siren button
    SIREN_FORM_SUBMIT_BTN: 'siren-form.submit.btn', // Submit siren button
};

class SirenListScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get list() {
        return findByTestId(this.driver, TEST_IDS.SIREN_LIST);
    }

    get switchToMapBtn() {
        return findByTestId(this.driver, TEST_IDS.SIREN_SWITCH_TO_MAP_BTN);
    }

    get switchToListBtn() {
        return findByTestId(this.driver, TEST_IDS.SIREN_SWITCH_TO_LIST_BTN);
    }

    get clusterToggleBtn() {
        return findByTestId(this.driver, TEST_IDS.SIREN_CLUSTER_TOGGLE_BTN);
    }

    get addBtn() {
        return findByTestId(this.driver, TEST_IDS.SIREN_ADD_BTN);
    }

    get mapAddBtn() {
        return findByTestId(this.driver, TEST_IDS.SIREN_MAP_ADD_BTN);
    }

    get qrScanner() {
        return findByTestId(this.driver, TEST_IDS.SIREN_FORM_QR_SCANNER);
    }

    get submitAndTestBtn() {
        return findByTestId(this.driver, TEST_IDS.SIREN_FORM_SUBMIT_AND_TEST_BTN);
    }

    get submitBtn() {
        return findByTestId(this.driver, TEST_IDS.SIREN_FORM_SUBMIT_BTN);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    SirenListScreen,
    TEST_IDS,
};
