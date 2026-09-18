const { remote } = require('webdriverio');

// Capabilities for Appium UiAutomator2 on Android
const capabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': process.env.APPIUM_DEVICE_NAME || 'zx6pqknvingy5hkr',
    'appium:appPackage': 'com.kalpvaig.cgtracker',
    'appium:appActivity': 'com.kalpvaig.cgtracker.MainActivity',
    'appium:noReset': true,
    'appium:ensureCleanPackageState': false,
};

const wdOpts = {
    hostname: process.env.APPIUM_HOST || '127.0.0.1',
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    logLevel: 'info',
    capabilities,
};

/**
 * Page Object Class representing the Login Screen of Gaj Sanket (com.kalpvaig.cgtracker)
 */
class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    // Test IDs as defined in the test plan
    static TEST_IDS = {
        LANGUAGE_SWITCH: 'login.language.switch',
        LOGIN_TAB: 'login.tab',
        MOBILE_INPUT: 'login.mobile-number.input',
        PASSWORD_INPUT: 'login.password.input',
        SEND_OTP_BTN: 'login.send-otp.btn',
        SUBMIT_BTN: 'login.submit.btn',
        SIGNUP_BTN: 'login.signup.btn',
    };

    /**
     * Helper to locate element using testId (resource-id or accessibility id) or fallback selector
     */
    async getSmartElement(testId, fallbackSelector) {
        if (testId) {
            try {
                const resIdEl = await this.driver.$(`//*[@resource-id="${testId}" or @content-desc="${testId}"]`);
                if (await resIdEl.isExisting()) {
                    return resIdEl;
                }
            } catch (e) { }

            try {
                const a11yEl = await this.driver.$(`~${testId}`);
                if (await a11yEl.isExisting()) {
                    return a11yEl;
                }
            } catch (e) { }
        }
        return this.driver.$(fallbackSelector);
    }

    // Locators
    get titleHeader() {
        return this.driver.$('//*[@text="Gaj Sanket - Chhattisgarh"]');
    }

    get languageSwitch() {
        return this.driver.$(`//*[@resource-id="${LoginPage.TEST_IDS.LANGUAGE_SWITCH}"]`);
    }

    get otpLoginTab() {
        return this.driver.$('//*[@resource-id="login.tab.otp-tab.btn" or @content-desc="OTP Login"]');
    }

    get passwordLoginTab() {
        return this.driver.$('//*[@resource-id="login.tab.password-tab.btn" or @content-desc="Password Login"]');
    }

    get contactInput() {
        return this.driver.$(`//*[@resource-id="${LoginPage.TEST_IDS.MOBILE_INPUT}"]`);
    }

    get requestOtpButton() {
        return this.driver.$(`//*[@resource-id="${LoginPage.TEST_IDS.SEND_OTP_BTN}"]`);
    }

    get usernameInput() {
        return this.driver.$(`//*[@resource-id="${LoginPage.TEST_IDS.MOBILE_INPUT}"]`);
    }

    get passwordInput() {
        return this.driver.$(`//*[@resource-id="${LoginPage.TEST_IDS.PASSWORD_INPUT}"]`);
    }

    get loginButton() {
        return this.driver.$(`//*[@resource-id="${LoginPage.TEST_IDS.SUBMIT_BTN}"]`);
    }

    get createAccountButton() {
        return this.driver.$(`//*[@resource-id="${LoginPage.TEST_IDS.SIGNUP_BTN}"]`);
    }

    // Page Actions
    async waitForPageLoad(timeout = 10000) {
        console.log('[LOG] Waiting for Login page to load...');
        const header = await this.getSmartElement(null, '//*[@text="Gaj Sanket - Chhattisgarh"]');
        try {
            await header.waitForDisplayed({ timeout: 5000 });
            console.log('[LOG] Login page loaded successfully.');
        } catch (e) {
            console.log('[LOG] Login header not found. Relaunching app to show login screen...');
            await this.driver.terminateApp('com.kalpvaig.cgtracker');
            await this.driver.pause(1000);
            await this.driver.activateApp('com.kalpvaig.cgtracker');
            await header.waitForDisplayed({ timeout: 10000 });
            console.log('[LOG] Login page loaded successfully after app restart.');
        }
    }

    async switchToOtpLogin() {
        console.log('[LOG] Clicking OTP Login tab...');
        const tab = await this.getSmartElement('login.tab.otp-tab.btn', '~OTP Login');
        await tab.waitForDisplayed({ timeout: 5000 });
        await tab.click();
    }

    async switchToPasswordLogin() {
        console.log('[LOG] Clicking Password Login tab...');
        const tab = await this.getSmartElement('login.tab.password-tab.btn', '~Password Login');
        await tab.waitForDisplayed({ timeout: 5000 });
        await tab.click();
    }

    async enterContact(contactNumber) {
        console.log(`[LOG] Entering contact number: ${contactNumber}`);
        const input = await this.getSmartElement(LoginPage.TEST_IDS.MOBILE_INPUT, '//android.widget.EditText');
        await input.waitForDisplayed({ timeout: 5000 });
        await input.setValue(contactNumber);
    }

    async clickRequestOtp() {
        console.log('[LOG] Clicking Request OTP button...');
        const btn = await this.getSmartElement(LoginPage.TEST_IDS.SEND_OTP_BTN, '~Request OTP');
        await btn.waitForDisplayed({ timeout: 5000 });
        await btn.click();
    }

    async enterCredentials(username, password) {
        console.log(`[LOG] Entering username: ${username}`);
        const userIn = await this.getSmartElement(LoginPage.TEST_IDS.MOBILE_INPUT, '(//android.widget.EditText)[1]');
        await userIn.waitForDisplayed({ timeout: 5000 });
        await userIn.setValue(username);

        console.log('[LOG] Entering password...');
        const passIn = await this.getSmartElement(LoginPage.TEST_IDS.PASSWORD_INPUT, '(//android.widget.EditText)[2]');
        await passIn.waitForDisplayed({ timeout: 5000 });
        await passIn.setValue(password);
    }

    async clickLogin() {
        console.log('[LOG] Clicking Login button...');
        const btn = await this.getSmartElement(LoginPage.TEST_IDS.SUBMIT_BTN, '~Login');
        await btn.waitForDisplayed({ timeout: 5000 });
        await btn.click();
    }

    async clickCreateAccount() {
        console.log('[LOG] Clicking Create Account button...');
        const btn = await this.getSmartElement(LoginPage.TEST_IDS.SIGNUP_BTN, '~Create Account');
        await btn.waitForDisplayed({ timeout: 5000 });
        await btn.click();
    }

    async toggleLanguage() {
        console.log('[LOG] Toggling language switch...');
        const sw = await this.getSmartElement(LoginPage.TEST_IDS.LANGUAGE_SWITCH, '//android.widget.Switch');
        await sw.waitForDisplayed({ timeout: 5000 });
        await sw.click();
    }
}

/**
 * Main Test Execution Function
 */
async function runTest() {
    console.log('[LOG] Starting Appium Session...');
    const driver = await remote(wdOpts);
    const loginPage = new LoginPage(driver);

    try {
        // 1. Verify Page Load
        await loginPage.waitForPageLoad();

        // 2. Perform Password Login
        console.log('\n--- Performing Password Login Test ---');
        await loginPage.switchToPasswordLogin();
        await driver.pause(1000);

        await loginPage.enterCredentials('8840755317', '12121212');
        await driver.pause(1000);

        await loginPage.clickLogin();

        console.log('\n[SUCCESS] Password login test completed successfully!');
    } catch (error) {
        console.error('[ERROR] Test execution failed:', error);
    } finally {
        console.log('[LOG] Ending session...');
        await driver.pause(2000);
        await driver.deleteSession();
    }
}

// Execute the automation test
runTest().catch(console.error);

module.exports = { LoginPage, runTest };
