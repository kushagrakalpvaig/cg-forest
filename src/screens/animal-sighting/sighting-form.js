/**
 * Screen Object for animal-sighting/sighting-form.js
 * Mirrors app/src/app/animal-sighting/sighting-form.jsx (Official & Collector Flow)
 */
const { findByTestId } = require('../../utils/driver.util');
const Gestures = require('../../utils/gestures.util');

const TEST_IDS = {
    // Standard testIDs for animal sighting form
    TOTAL_COUNT_INPUT: 'sighting-form.total-count.input',
    MALE_COUNT_INPUT: 'sighting-form.male-count.input',
    FEMALE_COUNT_INPUT: 'sighting-form.female-count.input',
    CALF_COUNT_INPUT: 'sighting-form.calf-count.input',
    REMARKS_INPUT: 'sighting-form.remarks.input',
    SUBMIT_BTN: 'sighting-form.submit.btn',
};

class SightingFormScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get totalCountInput() {
        return findByTestId(this.driver, TEST_IDS.TOTAL_COUNT_INPUT, '(//android.widget.EditText)[1]');
    }

    get maleCountInput() {
        return findByTestId(this.driver, TEST_IDS.MALE_COUNT_INPUT, '(//android.widget.EditText)[2]');
    }

    get femaleCountInput() {
        return findByTestId(this.driver, TEST_IDS.FEMALE_COUNT_INPUT, '(//android.widget.EditText)[3]');
    }

    get calfCountInput() {
        return findByTestId(this.driver, TEST_IDS.CALF_COUNT_INPUT, '(//android.widget.EditText)[4]');
    }

    get remarksInput() {
        return findByTestId(this.driver, TEST_IDS.REMARKS_INPUT, '//android.widget.EditText[contains(@hint, "Remark") or contains(@text, "Remark")]');
    }

    get submitBtn() {
        return findByTestId(this.driver, TEST_IDS.SUBMIT_BTN, '//*[@text="Submit" or @content-desc="Submit" or contains(@text, "Submit")]');
    }

    async fillElephantCounts({ total = 1, male = 1, female = 0, calf = 0 } = {}) {
        console.log(`[OFFICIAL_SIGHTING] Entering elephant counts: Total=${total}, M=${male}, F=${female}, C=${calf}`);
        const totalIn = await this.totalCountInput;
        await totalIn.waitForDisplayed({ timeout: 5000 });
        await totalIn.setValue(String(total));
    }

    async enterRemarks(text) {
        console.log(`[OFFICIAL_SIGHTING] Entering remarks: "${text}"`);
        const rem = await this.remarksInput;
        if (await rem.isDisplayed().catch(() => false)) {
            await rem.setValue(text);
        }
    }

    async submit() {
        console.log('[OFFICIAL_SIGHTING] Submitting official sighting...');
        await Gestures.scrollDown(this.driver);
        const btn = await this.submitBtn;
        await btn.waitForDisplayed({ timeout: 5000 });
        await btn.click();
    }
}

module.exports = {
    SightingFormScreen,
    TEST_IDS,
};
