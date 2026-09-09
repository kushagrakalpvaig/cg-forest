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

    // Locators
    get titleHeader() {
        return this.driver.$('//*[@text="Gaj Sanket - Chhattisgarh"]');
    }

    get languageSwitch() {
        return this.driver.$('//android.widget.Switch');
    }

    get otpLoginTab() {
        return this.driver.$('~OTP Login');
    }

    get passwordLoginTab() {
        return this.driver.$('~Password Login');
    }

    get contactInput() {
        return this.driver.$('//android.widget.EditText');
    }

    get requestOtpButton() {
        return this.driver.$('~Request OTP');
    }

    get usernameInput() {
        return this.driver.$('(//android.widget.EditText)[1]');
    }

    get passwordInput() {
        return this.driver.$('(//android.widget.EditText)[2]');
    }

    get loginButton() {
        return this.driver.$('~Login');
    }

    get createAccountButton() {
        return this.driver.$('~Create Account');
    }

    // Page Actions
    async waitForPageLoad(timeout = 10000) {
        console.log('[LOG] Waiting for Login page to load...');
        await this.titleHeader.waitForDisplayed({ timeout });
        console.log('[LOG] Login page loaded successfully.');
    }

    async switchToOtpLogin() {
        console.log('[LOG] Clicking OTP Login tab...');
        await this.otpLoginTab.waitForDisplayed({ timeout: 5000 });
        await this.otpLoginTab.click();
    }

    async switchToPasswordLogin() {
        console.log('[LOG] Clicking Password Login tab...');
        await this.passwordLoginTab.waitForDisplayed({ timeout: 5000 });
        await this.passwordLoginTab.click();
    }

    async enterContact(contactNumber) {
        console.log(`[LOG] Entering contact number: ${contactNumber}`);
        await this.contactInput.waitForDisplayed({ timeout: 5000 });
        await this.contactInput.setValue(contactNumber);
    }

    async clickRequestOtp() {
        console.log('[LOG] Clicking Request OTP button...');
        await this.requestOtpButton.waitForDisplayed({ timeout: 5000 });
        await this.requestOtpButton.click();
    }

    async enterCredentials(username, password) {
        console.log(`[LOG] Entering username: ${username}`);
        await this.usernameInput.waitForDisplayed({ timeout: 5000 });
        await this.usernameInput.setValue(username);

        console.log('[LOG] Entering password...');
        await this.passwordInput.waitForDisplayed({ timeout: 5000 });
        await this.passwordInput.setValue(password);
    }

    async clickLogin() {
        console.log('[LOG] Clicking Login button...');
        await this.loginButton.waitForDisplayed({ timeout: 5000 });
        await this.loginButton.click();
    }

    async clickCreateAccount() {
        console.log('[LOG] Clicking Create Account button...');
        await this.createAccountButton.waitForDisplayed({ timeout: 5000 });
        await this.createAccountButton.click();
    }

    async toggleLanguage() {
        console.log('[LOG] Toggling language switch...');
        await this.languageSwitch.waitForDisplayed({ timeout: 5000 });
        await this.languageSwitch.click();
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
        console.log('\n--- Performing Password Login ---');
        await loginPage.switchToPasswordLogin();
        await driver.pause(1000);
        await loginPage.enterCredentials('8840755317', '12121212');
        await driver.pause(1000);
        await loginPage.clickLogin();

        console.log('\n[SUCCESS] Password login completed successfully!');
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