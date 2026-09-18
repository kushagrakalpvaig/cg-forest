/**
 * Screen Object for auth/sign-up.js
 * Mirrors app/src/app/auth/sign-up.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    SIGNUP_BACK_BTN: 'signup.back.btn', // signup.back.btn
    SIGNUP_NAME_INPUT: 'signup.name.input', // signup.name.input
    SIGNUP_MOBILE_NUMBER_INPUT: 'signup.mobile-number.input', // signup.mobile-number.input
    SIGNUP_PASSWORD_INPUT: 'signup.password.input', // signup.password.input
    SIGNUP_CONFIRM_PASSWORD_INPUT: 'signup.confirm-password.input', // signup.confirm-password.input
    SIGNUP_TERMS_CHECKBOX: 'signup.terms.checkbox', // signup.terms.checkbox
    SIGNUP_TERMS_LINK: 'signup.terms.link', // signup.terms.link
    SIGNUP_SUBMIT_BTN: 'signup.submit.btn', // signup.submit.btn
    SIGNUP_LOGIN_BTN: 'signup.login.btn', // signup.login.btn
};

class SignUpScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get backBtn() {
        return findByTestId(this.driver, TEST_IDS.SIGNUP_BACK_BTN);
    }

    get nameInput() {
        return findByTestId(this.driver, TEST_IDS.SIGNUP_NAME_INPUT);
    }

    get mobileNumberInput() {
        return findByTestId(this.driver, TEST_IDS.SIGNUP_MOBILE_NUMBER_INPUT);
    }

    get passwordInput() {
        return findByTestId(this.driver, TEST_IDS.SIGNUP_PASSWORD_INPUT);
    }

    get confirmPasswordInput() {
        return findByTestId(this.driver, TEST_IDS.SIGNUP_CONFIRM_PASSWORD_INPUT);
    }

    get termsCheckbox() {
        return findByTestId(this.driver, TEST_IDS.SIGNUP_TERMS_CHECKBOX);
    }

    get termsLink() {
        return findByTestId(this.driver, TEST_IDS.SIGNUP_TERMS_LINK);
    }

    get submitBtn() {
        return findByTestId(this.driver, TEST_IDS.SIGNUP_SUBMIT_BTN);
    }

    get loginBtn() {
        return findByTestId(this.driver, TEST_IDS.SIGNUP_LOGIN_BTN);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    SignUpScreen,
    TEST_IDS,
};
