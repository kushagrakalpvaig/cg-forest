/**
 * Screen Object for help/villager-sighting-form.js
 * Mirrors app/src/app/help/villager-sighting-form.jsx (Public Sighting Flow)
 */
const { findByTestId } = require('../../utils/driver.util');
const Gestures = require('../../utils/gestures.util');

const TEST_IDS = {
    HELP_SIGHTING_FORM_BACK_BTN: 'help-sighting-form.back.btn',
    HELP_SIGHTING_FORM_DIRECTION_RADIO: 'help-sighting-form.direction.radio',
    HELP_SIGHTING_FORM_RECORD_AUDIO_BTN: 'help-sighting-form.record-audio.btn',
    HELP_SIGHTING_FORM_DESCRIPTION_INPUT: 'help-sighting-form.description.input',
    HELP_SIGHTING_FORM_EVIDENCE_IMG: 'help-sighting-form.evidence.img',
    HELP_SIGHTING_FORM_SUBMIT_BTN: 'help-sighting-form.submit.btn',
};

class VillagerSightingFormScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get backBtn() {
        return findByTestId(this.driver, TEST_IDS.HELP_SIGHTING_FORM_BACK_BTN, '//*[@content-desc="Back"]');
    }

    get directionRadio() {
        return findByTestId(this.driver, TEST_IDS.HELP_SIGHTING_FORM_DIRECTION_RADIO);
    }

    get recordAudioBtn() {
        return findByTestId(this.driver, TEST_IDS.HELP_SIGHTING_FORM_RECORD_AUDIO_BTN, '//*[contains(@content-desc, "Recording") or contains(@text, "Recording")]');
    }

    get descriptionInput() {
        return findByTestId(this.driver, TEST_IDS.HELP_SIGHTING_FORM_DESCRIPTION_INPUT, '//android.widget.EditText');
    }

    get evidenceImg() {
        return findByTestId(this.driver, TEST_IDS.HELP_SIGHTING_FORM_EVIDENCE_IMG, '//*[contains(@content-desc, "Camera") or contains(@text, "Camera")]');
    }

    get submitBtn() {
        return findByTestId(this.driver, TEST_IDS.HELP_SIGHTING_FORM_SUBMIT_BTN, '//*[@text="Submit" or contains(@content-desc, "Submit")]');
    }

    async selectDirection(direction = 'East') {
        console.log(`[VILLAGER_SIGHTING] Selecting direction: ${direction}`);
        const dirEl = await this.driver.$(`//*[@text="${direction}" or @content-desc="${direction}"]`);
        await dirEl.waitForDisplayed({ timeout: 5000 });
        await dirEl.click();
    }

    async enterDescription(text) {
        console.log(`[VILLAGER_SIGHTING] Entering description: "${text}"`);
        const input = await this.descriptionInput;
        await input.waitForDisplayed({ timeout: 5000 });
        await input.setValue(text);
    }

    async captureCameraPhoto() {
        console.log('[VILLAGER_SIGHTING] Triggering Camera...');
        const camBtn = await this.evidenceImg;
        await camBtn.waitForDisplayed({ timeout: 5000 });
        await camBtn.click();
        await this.driver.pause(2500);

        // System permission handling
        const permAllow = await this.driver.$('//*[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button" or @text="While using the app"]');
        if (await permAllow.isDisplayed().catch(() => false)) {
            await permAllow.click();
            await this.driver.pause(1500);
        }

        // Shutter click
        const shutter = await this.driver.$('//android.widget.ImageView[contains(@content-desc, "Shutter") or contains(@content-desc, "Take picture")] | //*[@resource-id="com.android.camera2:id/shutter_button"]');
        if (await shutter.isDisplayed().catch(() => false)) {
            await shutter.click();
            await this.driver.pause(3000);
        }

        // Done / Confirm checkmark
        const confirmBtn = await this.driver.$('//android.widget.ImageView[contains(@content-desc, "Done") or contains(@content-desc, "Confirm")] | //*[@resource-id="com.android.camera2:id/done_button"]');
        if (await confirmBtn.isDisplayed().catch(() => false)) {
            await confirmBtn.click();
            await this.driver.pause(2000);
        }
    }

    async submitForm() {
        console.log('[VILLAGER_SIGHTING] Submitting sighting form...');
        await Gestures.scrollDown(this.driver);
        const submit = await this.submitBtn;
        await submit.waitForDisplayed({ timeout: 5000 });
        await submit.click();
    }
}

module.exports = {
    VillagerSightingFormScreen,
    TEST_IDS,
};
