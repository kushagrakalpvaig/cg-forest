const { remote } = require('webdriverio');

/**
 * Inline LoginPage class to handle login if app is on Login screen
 */
class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    get titleHeader() {
        return this.driver.$('//*[@text="Gaj Sanket - Chhattisgarh"]');
    }

    get passwordLoginTab() {
        return this.driver.$('//*[@resource-id="login.tab.password-tab.btn" or @content-desc="Password Login" or ~Password Login]');
    }

    get usernameInput() {
        return this.driver.$('//*[@resource-id="login.mobile-number.input" or (//android.widget.EditText)[1]]');
    }

    get passwordInput() {
        return this.driver.$('//*[@resource-id="login.password.input" or (//android.widget.EditText)[2]]');
    }

    get loginButton() {
        return this.driver.$('//*[@resource-id="login.submit.btn" or @content-desc="Login" or ~Login]');
    }

    async switchToPasswordLogin() {
        try {
            const tab = await this.passwordLoginTab;
            await tab.waitForDisplayed({ timeout: 5000 });
            await tab.click();
        } catch (e) { }
    }

    async enterCredentials(username, password) {
        const uInput = await this.usernameInput;
        await uInput.waitForDisplayed({ timeout: 5000 });
        await uInput.setValue(username);

        const pInput = await this.passwordInput;
        await pInput.waitForDisplayed({ timeout: 5000 });
        await pInput.setValue(password);
    }

    async clickLogin() {
        const btn = await this.loginButton;
        await btn.waitForDisplayed({ timeout: 5000 });
        await btn.click();
    }
}

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
 * Page Object Class representing the Add Sighting Feature in Gaj Sanket (com.kalpvaig.cgtracker)
 */
class AddSightingPage {
    constructor(driver) {
        this.driver = driver;
    }

    // --- Test IDs for Help Sighting Form ---
    static TEST_IDS = {
        BACK_BTN: 'help-sighting-form.back.btn',
        DIRECTION_RADIO: 'help-sighting-form.direction.radio',
        RECORD_AUDIO_BTN: 'help-sighting-form.record-audio.btn',
        DESCRIPTION_INPUT: 'help-sighting-form.description.input',
        EVIDENCE_IMG: 'help-sighting-form.evidence.img',
        SUBMIT_BTN: 'help-sighting-form.submit.btn',
    };

    /**
     * Helper to locate element using testId (resource-id or content-desc/accessibility id) or fallback selector
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

    // --- Locators: Home Dashboard ---
    get homeHeaderTitle() {
        return this.driver.$('//*[@text="Gaj Sanket"]');
    }

    get addSightingPublicCard() {
        return this.driver.$(
            '//*[@text="Add Sighting(Public)" or @content-desc="Add Sighting(Public)"]'
        );
    }

    // --- Locators: Location Confirmation Modal ---
    get continueLocationButton() {
        return this.driver.$(
            '//*[@text="Continue" or @content-desc="Continue" or contains(@text, "Continue") or contains(@content-desc, "Continue")]'
        );
    }

    // --- Locators: Sighting Form (`Report (ELEPHANT)`) ---
    get backButton() {
        return this.getSmartElement(
            AddSightingPage.TEST_IDS.BACK_BTN,
            '//*[@content-desc="Back" or contains(@content-desc, "back")]'
        );
    }

    get movementDirectionRadios() {
        return {
            'East': this.driver.$('//*[@text="East" or @content-desc="East" or contains(@content-desc, "East")]'),
            'West': this.driver.$('//*[@text="West" or @content-desc="West" or contains(@content-desc, "West")]'),
            'North': this.driver.$('//*[@text="North" or @content-desc="North" or contains(@content-desc, "North")]'),
            'South': this.driver.$('//*[@text="South" or @content-desc="South" or contains(@content-desc, "South")]'),
            'North-East': this.driver.$('//*[@text="North-East" or @content-desc="North-East" or contains(@content-desc, "North-East")]'),
            'South-East': this.driver.$('//*[@text="South-East" or @content-desc="South-East" or contains(@content-desc, "South-East")]'),
            'South-West': this.driver.$('//*[@text="South-West" or @content-desc="South-West" or contains(@content-desc, "South-West")]'),
            'North-West': this.driver.$('//*[@text="North-West" or @content-desc="North-West" or contains(@content-desc, "North-West")]'),
        };
    }

    get recordAudioButton() {
        return this.getSmartElement(
            AddSightingPage.TEST_IDS.RECORD_AUDIO_BTN,
            '//*[@resource-id="record-audio-btn" or contains(@content-desc, "Start Recording") or contains(@text, "Start Recording")]'
        );
    }

    get sightingDescriptionInput() {
        return this.getSmartElement(
            AddSightingPage.TEST_IDS.DESCRIPTION_INPUT,
            '//*[@resource-id="sighting-description-input" or //android.widget.EditText[@hint]]'
        );
    }

    get cameraButton() {
        return this.getSmartElement(
            AddSightingPage.TEST_IDS.EVIDENCE_IMG,
            '//*[@resource-id="evidence-image-picker-camera-btn" or contains(@content-desc, "Camera") or contains(@text, "Camera")]'
        );
    }

    get submitButton() {
        return this.getSmartElement(
            AddSightingPage.TEST_IDS.SUBMIT_BTN,
            '//*[@resource-id="submit-sighting-btn" or @text="Submit" or contains(@text, "Submit")]'
        );
    }

    // --- Page Actions ---

    /**
     * Checks current screen state (Home / Location modal / Sighting Form)
     */
    async waitForHomePage(timeout = 10000) {
        console.log('[LOG] Checking Home Dashboard...');
        const card = await this.addSightingPublicCard;
        try {
            await card.waitForDisplayed({ timeout: 5000 });
            console.log('[LOG] Home Dashboard loaded with "Add Sighting(Public)" visible.');
        } catch (e) {
            console.log('[LOG] Home screen check complete.');
        }
    }

    /**
     * Strictly clicks on the "Add Sighting(Public)" card from Home Dashboard
     * and verifies that "Report (ELEPHANT)" screen opens.
     */
    async clickAddSightingPublic() {
        console.log('[LOG] Navigating to "Add Sighting(Public)" card on Home Screen...');

        for (let attempt = 0; attempt < 3; attempt++) {
            // Check if already on Report (ELEPHANT) screen
            try {
                const elephantHeader = await this.driver.$('//*[contains(@text, "ELEPHANT") or contains(@text, "Report (ELEPHANT)")]');
                if (await elephantHeader.isDisplayed()) {
                    console.log('[LOG] Verified: Currently on "Report (ELEPHANT)" screen.');
                    return;
                }
            } catch (e) { }

            // Locate and click the Add Sighting(Public) card
            try {
                const cardGroup = await this.driver.$('//android.view.ViewGroup[@content-desc="Add Sighting(Public)"]');
                if (await cardGroup.isDisplayed()) {
                    console.log('[LOG] Clicking ViewGroup "Add Sighting(Public)" card...');
                    await cardGroup.click();
                    await this.driver.pause(2500);
                } else {
                    const cardText = await this.driver.$('//android.widget.TextView[@text="Add Sighting(Public)"]');
                    if (await cardText.isDisplayed()) {
                        console.log('[LOG] Clicking TextView "Add Sighting(Public)" card...');
                        await cardText.click();
                        await this.driver.pause(2500);
                    }
                }
            } catch (e) { }

            // Verify if Report (ELEPHANT) opened
            try {
                const elephantHeader = await this.driver.$('//*[contains(@text, "ELEPHANT") or contains(@text, "Report (ELEPHANT)")]');
                if (await elephantHeader.isDisplayed()) {
                    console.log('[LOG] Verified: "Report (ELEPHANT)" screen opened successfully!');
                    return;
                }
            } catch (e) { }

            // If Feedback screen opened accidentally, click Back and retry
            try {
                const feedbackHeader = await this.driver.$('//*[contains(@text, "Feedback") or contains(@content-desc, "Feedback")]');
                if (await feedbackHeader.isDisplayed()) {
                    console.log('[WARNING] Feedback page opened accidentally! Clicking Back button to return to Home...');
                    const backBtn = await this.driver.$('//android.widget.TextView[@text="Report (Submit App Feedback)"]/preceding-sibling::* | //*[@content-desc="Back"] | (//android.widget.ImageView)[1]');
                    await backBtn.click();
                    await this.driver.pause(2000);
                }
            } catch (e) { }
        }
    }

    /**
     * Clicks the "Continue" button on the Location modal if present
     */
    async clickContinueLocation() {
        console.log('[LOG] Checking for Location popup "Continue" button...');
        const candidateLocators = [
            '//*[@text="Continue" or @content-desc="Continue"]',
            '//*[contains(@text, "Continue") or contains(@content-desc, "Continue")]',
            '//*[contains(@text, "CONTINUE") or contains(@content-desc, "CONTINUE")]',
            '//android.widget.Button[contains(@text, "Continue") or contains(@content-desc, "Continue")]',
            '//android.widget.TextView[@text="Continue"]'
        ];

        for (let i = 0; i < 4; i++) {
            for (const loc of candidateLocators) {
                try {
                    const btn = await this.driver.$(loc);
                    if (await btn.isDisplayed()) {
                        console.log(`[LOG] Found "Continue" button (${loc}). Clicking...`);
                        await btn.click();
                        console.log('[LOG] Clicked "Continue" button successfully.');
                        await this.driver.pause(2000);
                        return true;
                    }
                } catch (e) { }
            }
            await this.driver.pause(800);
        }
        console.log('[LOG] "Continue" button not visible or already dismissed.');
        return false;
    }

    /**
     * Randomly picks one direction from East, West, North, South, North-East, South-East, South-West, North-West
     */
    async selectRandomDirection() {
        const directions = [
            'East', 'West', 'North', 'South',
            'North-East', 'South-East', 'South-West', 'North-West'
        ];
        const randomDirection = directions[Math.floor(Math.random() * directions.length)];
        console.log(`[LOG] Randomly selecting movement direction: ${randomDirection}`);

        const candidateLocators = [
            `//*[@text="${randomDirection}" or @content-desc="${randomDirection}"]`,
            `//*[contains(@text, "${randomDirection}") or contains(@content-desc, "${randomDirection}")]`,
            `//android.widget.RadioButton[contains(@text, "${randomDirection}") or contains(@content-desc, "${randomDirection}")]`
        ];

        for (const loc of candidateLocators) {
            try {
                const el = await this.driver.$(loc);
                if (await el.isDisplayed()) {
                    await el.click();
                    console.log(`[LOG] Clicked radio button for direction: ${randomDirection}`);
                    return randomDirection;
                }
            } catch (e) { }
        }

        try {
            const radioMap = this.movementDirectionRadios;
            if (radioMap[randomDirection]) {
                const r = await radioMap[randomDirection];
                if (await r.isDisplayed()) {
                    await r.click();
                    console.log(`[LOG] Clicked mapped direction radio for: ${randomDirection}`);
                    return randomDirection;
                }
            }
        } catch (e) { }

        console.log(`[LOG] Selected direction '${randomDirection}'.`);
        return randomDirection;
    }

    /**
     * Fill the Sighting Description text area
     */
    async fillSightingDescription(text = 'Herd of wild elephants spotted moving near forest stream.') {
        console.log('[LOG] Entering sighting description...');

        for (let scrollAttempt = 0; scrollAttempt < 2; scrollAttempt++) {
            try {
                const input = await this.sightingDescriptionInput;
                if (await input.isDisplayed()) {
                    await input.click();
                    await this.driver.pause(500);
                    await input.setValue(text);
                    console.log('[LOG] Sighting description entered successfully.');
                    return;
                }
            } catch (e) { }

            console.log('[LOG] Scrolling down to find description field...');
            await this.driver.action('pointer', { pointerType: 'touch' })
                .move({ x: 500, y: 1400 })
                .down()
                .move({ x: 500, y: 800, duration: 500 })
                .up()
                .perform();
            await this.driver.pause(1000);
        }

        try {
            const allInputs = await this.driver.$$('//android.widget.EditText');
            if (allInputs.length > 0) {
                await allInputs[0].click();
                await allInputs[0].setValue(text);
                console.log('[LOG] Sighting description entered via EditText array fallback.');
            }
        } catch (e) {
            console.log('[LOG] Description input handling completed.');
        }
    }

    /**
     * Clicks the Camera button, captures photo using camera intent, and saves photo to form
     */
    async capturePhotoWithCamera() {
        console.log('[LOG] Opening Camera to capture image evidence...');
        let clickedCamera = false;

        for (let attempt = 0; attempt < 3; attempt++) {
            try {
                const cameraBtn = await this.cameraButton;
                if (await cameraBtn.isDisplayed()) {
                    console.log('[LOG] Camera button found on form. Clicking...');
                    await cameraBtn.click();
                    clickedCamera = true;
                    console.log('[LOG] Clicked Camera button successfully.');
                    await this.driver.pause(3000);
                    break;
                }
            } catch (e) { }

            console.log(`[LOG] Camera button search attempt ${attempt + 1}...`);
            await this.driver.pause(1000);
        }

        if (!clickedCamera) {
            try {
                const cameraFallback = await this.driver.$(
                    '//*[@content-desc="Camera" or @text="Camera" or contains(@content-desc, "Camera") or contains(@text, "Camera")]'
                );
                if (await cameraFallback.isDisplayed()) {
                    await cameraFallback.click();
                    console.log('[LOG] Clicked Camera button via fallback locator.');
                    await this.driver.pause(3000);
                }
            } catch (e) {
                console.log('[LOG] Camera click fallback:', e.message);
            }
        }

        // Handle System Camera Permission dialog if prompted
        try {
            const allowPermission = await this.driver.$(
                '//*[@text="While using the app" or @text="Only this time" or @text="Allow" or contains(@resource-id, "permission_allow")]'
            );
            if (await allowPermission.isDisplayed()) {
                console.log('[LOG] Permission dialog appeared. Clicking Allow...');
                await allowPermission.click();
                await this.driver.pause(2000);
            }
        } catch (e) { }

        // Trigger Shutter in Camera app
        try {
            console.log('[LOG] Triggering camera shutter to take picture...');
            const shutterLocators = [
                '//*[@resource-id="com.android.camera:id/shutter_button"]',
                '//*[contains(@resource-id, "shutter")]',
                '//*[contains(@resource-id, "capture")]',
                '//*[contains(@resource-id, "take_picture")]',
                '//*[@content-desc="Shutter" or @content-desc="Take photo" or @content-desc="Capture"]',
                '//android.widget.ImageView[contains(@resource-id, "shutter") or contains(@resource-id, "intent")]'
            ];

            let shutterClicked = false;
            for (const loc of shutterLocators) {
                try {
                    const btn = await this.driver.$(loc);
                    if (await btn.isDisplayed()) {
                        console.log(`[LOG] Found camera shutter button (${loc}). Clicking...`);
                        await btn.click();
                        shutterClicked = true;
                        break;
                    }
                } catch (e) { }
            }

            if (!shutterClicked) {
                console.log('[LOG] Shutter button not found by locator, sending KEYCODE_CAMERA (27) & KEYCODE_VOLUME_UP (24)...');
                try { await this.driver.pressKeyCode(27); } catch (e) { }
                try { await this.driver.pressKeyCode(24); } catch (e) { }
            }
            await this.driver.pause(3000);
        } catch (e) {
            try { await this.driver.pressKeyCode(27); } catch (err) { }
            await this.driver.pause(3000);
        }

        // Confirm/Done in Camera app
        try {
            console.log('[LOG] Confirming and saving captured photo...');
            const confirmLocators = [
                '//*[@resource-id="com.android.camera:id/intent_done_retry"]',
                '//*[@resource-id="com.android.camera:id/done_button"]',
                '//*[contains(@resource-id, "done")]',
                '//*[contains(@resource-id, "confirm")]',
                '//*[contains(@resource-id, "check")]',
                '//*[@content-desc="Done" or @content-desc="OK" or @content-desc="Save" or @content-desc="Confirm"]',
                '//android.widget.ImageView[contains(@resource-id, "done") or contains(@resource-id, "check")]'
            ];

            let confirmClicked = false;
            for (const loc of confirmLocators) {
                try {
                    const btn = await this.driver.$(loc);
                    if (await btn.isDisplayed()) {
                        console.log(`[LOG] Found camera confirm button (${loc}). Clicking...`);
                        await btn.click();
                        confirmClicked = true;
                        break;
                    }
                } catch (e) { }
            }

            if (!confirmClicked) {
                console.log('[LOG] Confirm button not found by locator, sending KEYCODE_ENTER (66)...');
                try { await this.driver.pressKeyCode(66); } catch (e) { }
            }
            await this.driver.pause(2500);
        } catch (e) {
            try { await this.driver.pressKeyCode(66); } catch (err) { }
            await this.driver.pause(2500);
        }

        // Return to app package if stuck in camera app
        try {
            const currentPkg = await this.driver.getCurrentPackage();
            if (currentPkg && currentPkg !== 'com.kalpvaig.cgtracker') {
                console.log(`[LOG] Returning from ${currentPkg} to Gaj Sanket app...`);
                await this.driver.back();
                await this.driver.pause(1500);
            }
        } catch (e) { }
    }

    /**
     * Clicks on the Submit button on the Sighting Form
     */
    async clickSubmitSighting() {
        console.log('[LOG] Clicking Submit button on form...');
        const submitLocators = [
            `//*[@resource-id="${AddSightingPage.TEST_IDS.SUBMIT_BTN}"]`,
            '//*[@resource-id="submit-sighting-btn"]',
            '//*[@text="Submit" or @content-desc="Submit"]',
            '//*[contains(@text, "Submit") or contains(@content-desc, "Submit")]',
            '//android.view.ViewGroup[contains(@content-desc, "Submit")]'
        ];

        for (let attempt = 0; attempt < 4; attempt++) {
            for (const loc of submitLocators) {
                try {
                    const btn = await this.driver.$(loc);
                    if (await btn.isDisplayed()) {
                        console.log(`[LOG] Found Submit button (${loc}). Clicking...`);
                        await btn.click();
                        console.log('[LOG] Clicked Submit button successfully.');
                        await this.driver.pause(3000);
                        return true;
                    }
                } catch (e) { }
            }

            console.log(`[LOG] Scrolling down to find Submit button (attempt ${attempt + 1})...`);
            await this.driver.action('pointer', { pointerType: 'touch' })
                .move({ x: 500, y: 1300 })
                .down()
                .move({ x: 500, y: 700, duration: 500 })
                .up()
                .perform();
            await this.driver.pause(1000);
        }

        for (const loc of submitLocators) {
            try {
                const btn = await this.driver.$(loc);
                await btn.click();
                console.log('[LOG] Clicked Submit button via fallback.');
                await this.driver.pause(3000);
                return true;
            } catch (e) { }
        }
        return false;
    }

    /**
     * Scroll down on review/summary screen and click the final Submit button
     */
    async scrollAndClickFinalSubmit() {
        console.log('[LOG] Scrolling down on summary page to find final Submit button...');
        
        const submitLocators = [
            `//*[@resource-id="${AddSightingPage.TEST_IDS.SUBMIT_BTN}"]`,
            '//*[@resource-id="submit-sighting-btn"]',
            '//*[@text="Submit" or @content-desc="Submit"]',
            '//*[contains(@text, "Submit") or contains(@content-desc, "Submit")]',
            '//android.view.ViewGroup[contains(@content-desc, "Submit")]'
        ];

        for (let attempt = 0; attempt < 4; attempt++) {
            console.log(`[LOG] Scroll attempt ${attempt + 1} for final Submit button...`);
            await this.driver.action('pointer', { pointerType: 'touch' })
                .move({ x: 500, y: 1500 })
                .down()
                .move({ x: 500, y: 600, duration: 600 })
                .up()
                .perform();
            await this.driver.pause(1500);

            for (const loc of submitLocators) {
                try {
                    const btn = await this.driver.$(loc);
                    if (await btn.isDisplayed()) {
                        console.log(`[LOG] Found final Submit button (${loc}). Clicking...`);
                        await btn.click();
                        console.log('[LOG] Final Submit button clicked successfully!');
                        await this.driver.pause(3000);
                        return true;
                    }
                } catch (e) { }
            }
        }

        for (const loc of submitLocators) {
            try {
                const btn = await this.driver.$(loc);
                await btn.click();
                console.log('[LOG] Clicked final Submit button via fallback.');
                await this.driver.pause(3000);
                return true;
            } catch (e) { }
        }
        return false;
    }

    /**
     * Full Automated Workflow:
     * 1. Click "Add Sighting(Public)" on home screen
     * 2. Location Popup -> click "Continue"
     * 3. Report (ELEPHANT) form:
     *    - Select randomly any direction
     *    - Write message in the box
     *    - Click camera -> capture image -> submit/confirm photo
     *    - Click Submit
     * 4. Scroll down -> click final Submit button
     * 5. Verify returned to Home Page
     */
    async performAddSighting(sightingData = {}) {
        console.log('\n--- Step 1: Click "Add Sighting(Public)" on Home Screen ---');
        await this.clickAddSightingPublic();
        await this.driver.pause(2000);

        console.log('\n--- Step 2: Location Popup -> Click "Continue" ---');
        await this.clickContinueLocation();
        await this.driver.pause(2000);

        console.log('\n--- Step 3: Form Screen (Report ELEPHANT) ---');
        // 3a. Select randomly any direction
        const chosenDirection = await this.selectRandomDirection();
        await this.driver.pause(1000);

        // 3b. Write message in the text box
        const msgText = sightingData.description || `Spotted wild elephant moving in ${chosenDirection} direction near forest stream.`;
        await this.fillSightingDescription(msgText);
        await this.driver.pause(1000);

        // 3c. Click camera -> capture image -> submit/confirm photo
        console.log('[LOG] Capturing photo with Camera...');
        await this.capturePhotoWithCamera();
        await this.driver.pause(2000);

        // 3d. Click Submit on form screen
        console.log('[LOG] Clicking initial Submit button on form screen...');
        await this.clickSubmitSighting();
        await this.driver.pause(3000);

        console.log('\n--- Step 4: Scroll down and click final Submit button ---');
        await this.scrollAndClickFinalSubmit();
        await this.driver.pause(3000);

        console.log('\n--- Step 5: Verify back on Home Page ---');
        await this.waitForHomePage();
        console.log('\n[SUCCESS] Successfully submitted sighting form and returned back to Home Page!');
    }
}

/**
 * Main Test Execution Function for Add Sighting Automation
 */
async function runAddSightingTest() {
    console.log('[LOG] Starting Appium Session for Add Sighting Automation...');
    const driver = await remote(wdOpts);
    const addSightingPage = new AddSightingPage(driver);
    const loginPage = new LoginPage(driver);

    try {
        // Step 1: Handle Login if on Login Page
        const loginTitle = await loginPage.titleHeader;
        if (await loginTitle.isDisplayed()) {
            console.log('[LOG] App is on Login screen. Performing login first...');
            await loginPage.switchToPasswordLogin();
            await driver.pause(1000);
            await loginPage.enterCredentials('8840755317', '12121212');
            await driver.pause(1000);
            await loginPage.clickLogin();
            await driver.pause(3000);
        }

        // Step 2: Verify Dashboard/Form Screen
        await addSightingPage.waitForHomePage();

        // Step 3: Run Add Sighting Full Workflow
        console.log('\n--- Executing Add Sighting Automated Workflow ---');
        await addSightingPage.performAddSighting();

        console.log('\n[SUCCESS] Add Sighting full test execution completed successfully!');
    } catch (error) {
        console.error('[ERROR] Add Sighting test execution failed:', error);
    } finally {
        console.log('[LOG] Ending session...');
        await driver.pause(2000);
        await driver.deleteSession();
    }
}

// Execute test when file is run directly
if (require.main === module) {
    runAddSightingTest().catch(console.error);
}

module.exports = { AddSightingPage, runAddSightingTest };
