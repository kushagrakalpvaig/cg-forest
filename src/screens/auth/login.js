/**
 * Screen Object for auth/login.js
 * Mirrors app/src/app/auth/login.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    LOGIN_LANGUAGE_SWITCH: 'login.language.switch',
    LOGIN_TAB: 'login.tab',
    LOGIN_MOBILE_NUMBER_INPUT: 'login.mobile-number.input',
    LOGIN_PASSWORD_INPUT: 'login.password.input',
    LOGIN_SEND_OTP_BTN: 'login.send-otp.btn',
    LOGIN_SUBMIT_BTN: 'login.submit.btn',
    LOGIN_SIGNUP_BTN: 'login.signup.btn',
};

class LoginScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get titleHeader() {
        return this.driver.$('//*[@text="Gaj Sanket - Chhattisgarh"]');
    }

    get languageSwitch() {
        return findByTestId(this.driver, TEST_IDS.LOGIN_LANGUAGE_SWITCH, '//android.widget.Switch');
    }

    get tab() {
        return findByTestId(this.driver, TEST_IDS.LOGIN_TAB);
    }

    get otpLoginTab() {
        return findByTestId(this.driver, 'login.tab.otp-tab.btn', '//*[@content-desc="OTP Login" or @text="OTP Login"]');
    }

    get passwordLoginTab() {
        return findByTestId(this.driver, 'login.tab.password-tab.btn', '//*[@content-desc="Password Login" or @text="Password Login"]');
    }

    get mobileNumberInput() {
        return findByTestId(this.driver, TEST_IDS.LOGIN_MOBILE_NUMBER_INPUT, '(//android.widget.EditText)[1]');
    }

    get passwordInput() {
        return findByTestId(this.driver, TEST_IDS.LOGIN_PASSWORD_INPUT, '(//android.widget.EditText)[2]');
    }

    get sendOtpBtn() {
        return findByTestId(this.driver, TEST_IDS.LOGIN_SEND_OTP_BTN, '//*[@content-desc="Send OTP" or contains(@text, "OTP")]');
    }

    get submitBtn() {
        return findByTestId(this.driver, TEST_IDS.LOGIN_SUBMIT_BTN, '//*[@content-desc="Login" or @text="Login"]');
    }

    get signupBtn() {
        return findByTestId(this.driver, TEST_IDS.LOGIN_SIGNUP_BTN, '//*[@content-desc="Create Account" or @text="Create Account"]');
    }

    async waitForPageLoad(timeout = 10000) {
        console.log('[LOGIN_SCREEN] Waiting for Login screen...');
        try {
            const header = await this.titleHeader;
            await header.waitForDisplayed({ timeout: 5000 });
        } catch (e) {
            console.log('[LOGIN_SCREEN] Re-activating app to reach Login screen...');
            await this.driver.terminateApp('com.kalpvaig.cgtracker');
            await this.driver.pause(1000);
            await this.driver.activateApp('com.kalpvaig.cgtracker');
            const header = await this.titleHeader;
            await header.waitForDisplayed({ timeout });
        }
    }

    async switchToPasswordLogin() {
        const tab = await this.passwordLoginTab;
        await tab.waitForDisplayed({ timeout: 5000 });
        await tab.click();
    }

    async switchToOtpLogin() {
        const tab = await this.otpLoginTab;
        await tab.waitForDisplayed({ timeout: 5000 });
        await tab.click();
    }

    async enterCredentials(mobile, password) {
        const mob = await this.mobileNumberInput;
        await mob.waitForDisplayed({ timeout: 5000 });
        await mob.setValue(mobile);

        const pwd = await this.passwordInput;
        await pwd.waitForDisplayed({ timeout: 5000 });
        await pwd.setValue(password);
    }

    async submitLogin() {
        const btn = await this.submitBtn;
        await btn.waitForDisplayed({ timeout: 5000 });
        await btn.click();
    }
}

module.exports = {
    LoginScreen,
    TEST_IDS,
};
