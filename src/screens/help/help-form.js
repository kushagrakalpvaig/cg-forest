/**
 * Screen Object for help/help-form.js
 * Mirrors app/src/app/help/help-form.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    HELP_FORM_BACK_BTN: 'help-form.back.btn', // help-form.back.btn
    HELP_FORM_LOCATION_MODAL: 'help-form.location.modal', // help-form.location.modal
    HELP_FORM_DESCRIPTION_INPUT: 'help-form.description.input', // help-form.description.input
    HELP_FORM_IMAGE_IMG: 'help-form.image.img', // help-form.image.img
    HELP_FORM_SUBMIT_BTN: 'help-form.submit.btn', // Submit
};

class HelpFormScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get backBtn() {
        return findByTestId(this.driver, TEST_IDS.HELP_FORM_BACK_BTN);
    }

    get locationModal() {
        return findByTestId(this.driver, TEST_IDS.HELP_FORM_LOCATION_MODAL);
    }

    get descriptionInput() {
        return findByTestId(this.driver, TEST_IDS.HELP_FORM_DESCRIPTION_INPUT);
    }

    get imageImg() {
        return findByTestId(this.driver, TEST_IDS.HELP_FORM_IMAGE_IMG);
    }

    get submitBtn() {
        return findByTestId(this.driver, TEST_IDS.HELP_FORM_SUBMIT_BTN);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    HelpFormScreen,
    TEST_IDS,
};
