/**
 * Screen Object for account/edit-contact.js
 * Mirrors app/src/app/account/edit-contact.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    EDIT_CONTACT_BACK_BTN: 'edit-contact.back.btn', // edit-contact.back.btn
    EDIT_CONTACT_MOBILE_INPUT: 'edit-contact.mobile.input', // edit-contact.mobile.input
    EDIT_CONTACT_VERIFY_BTN: 'edit-contact.verify.btn', // edit-contact.verify.btn
    EDIT_CONTACT_SUBMIT_BTN: 'edit-contact.submit.btn', // edit-contact.submit.btn
    PROFILE_CONTACT_MOBILE_INPUT: 'profile-contact.mobile.input', // Mobile number input
    PROFILE_CONTACT_SAVE_BTN: 'profile-contact.save.btn', // Save contact button
    PROFILE_CONTACT_EDIT_BTN: 'profile-contact.edit.btn', // Edit contact button
};

class EditContactScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get backBtn() {
        return findByTestId(this.driver, TEST_IDS.EDIT_CONTACT_BACK_BTN);
    }

    get mobileInput() {
        return findByTestId(this.driver, TEST_IDS.EDIT_CONTACT_MOBILE_INPUT);
    }

    get verifyBtn() {
        return findByTestId(this.driver, TEST_IDS.EDIT_CONTACT_VERIFY_BTN);
    }

    get submitBtn() {
        return findByTestId(this.driver, TEST_IDS.EDIT_CONTACT_SUBMIT_BTN);
    }

    get mobileInput() {
        return findByTestId(this.driver, TEST_IDS.PROFILE_CONTACT_MOBILE_INPUT);
    }

    get saveBtn() {
        return findByTestId(this.driver, TEST_IDS.PROFILE_CONTACT_SAVE_BTN);
    }

    get editBtn() {
        return findByTestId(this.driver, TEST_IDS.PROFILE_CONTACT_EDIT_BTN);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    EditContactScreen,
    TEST_IDS,
};
