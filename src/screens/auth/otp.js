/**
 * Screen Object for auth/otp.js
 * Mirrors app/src/app/auth/otp.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    OTP_BACK_BTN: 'otp.back.btn', // otp.back.btn
    OTP_CODE_INPUT: 'otp.code.input', // otp.code.input
    OTP_RESEND_BTN: 'otp.resend.btn', // otp.resend.btn
    OTP_SUBMIT_BTN: 'otp.submit.btn', // otp.submit.btn
};

class OtpScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get backBtn() {
        return findByTestId(this.driver, TEST_IDS.OTP_BACK_BTN);
    }

    get codeInput() {
        return findByTestId(this.driver, TEST_IDS.OTP_CODE_INPUT);
    }

    get resendBtn() {
        return findByTestId(this.driver, TEST_IDS.OTP_RESEND_BTN);
    }

    get submitBtn() {
        return findByTestId(this.driver, TEST_IDS.OTP_SUBMIT_BTN);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    OtpScreen,
    TEST_IDS,
};
