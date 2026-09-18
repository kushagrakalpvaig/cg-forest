/**
 * Screen Object for verify/sightings-list.js
 * Mirrors app/src/app/verify/sightings-list.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    VERIFY_SIGHTINGS_CATEGORY_TAB: 'verify-sightings.{category}.tab', // Sighting category tab
    VERIFY_SIGHTINGS_LIST: 'verify-sightings.list', // Sightings for verification list
    VERIFY_SIGHTINGS_ID_CARD: 'verify-sightings.{id}.card', // Verify sighting card item
    VERIFY_FORM_CALL_REPORTER_BTN: 'verify-form.call-reporter.btn', // Call reporter button
    VERIFY_FORM_AUDIO_PLAY_BTN: 'verify-form.audio-play.btn', // Play audio evidence button
    VERIFY_FORM_DIRECTIONS_BTN: 'verify-form.directions.btn', // Get directions button
    VERIFY_FORM_REJECT_BTN: 'verify-form.reject.btn', // Reject false information button
    VERIFY_FORM_VALIDATE_BTN: 'verify-form.validate.btn', // Validate valid information button
};

class SightingsListScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    getCategoryTab(param) {
        return findByTestId(this.driver, TEST_IDS.VERIFY_SIGHTINGS_CATEGORY_TAB.replace(/\{[^}]+\}/, param));
    }

    get list() {
        return findByTestId(this.driver, TEST_IDS.VERIFY_SIGHTINGS_LIST);
    }

    getIdCard(param) {
        return findByTestId(this.driver, TEST_IDS.VERIFY_SIGHTINGS_ID_CARD.replace(/\{[^}]+\}/, param));
    }

    get callReporterBtn() {
        return findByTestId(this.driver, TEST_IDS.VERIFY_FORM_CALL_REPORTER_BTN);
    }

    get audioPlayBtn() {
        return findByTestId(this.driver, TEST_IDS.VERIFY_FORM_AUDIO_PLAY_BTN);
    }

    get directionsBtn() {
        return findByTestId(this.driver, TEST_IDS.VERIFY_FORM_DIRECTIONS_BTN);
    }

    get rejectBtn() {
        return findByTestId(this.driver, TEST_IDS.VERIFY_FORM_REJECT_BTN);
    }

    get validateBtn() {
        return findByTestId(this.driver, TEST_IDS.VERIFY_FORM_VALIDATE_BTN);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    SightingsListScreen,
    TEST_IDS,
};
