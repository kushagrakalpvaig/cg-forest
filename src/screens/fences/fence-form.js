/**
 * Screen Object for fences/fence-form.js
 * Mirrors app/src/app/fences/fence-form.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    FENCE_FORM_ADD_HOOK_BTN: 'fence-form.add-hook.btn', // Add hook button
    FENCE_FORM_ADD_FENCE_BTN: 'fence-form.add-fence.btn', // Add fence button
    FENCE_FORM_UPLOAD_BTN: 'fence-form.upload.btn', // Upload marked fences button
};

class FenceFormScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get addHookBtn() {
        return findByTestId(this.driver, TEST_IDS.FENCE_FORM_ADD_HOOK_BTN);
    }

    get addFenceBtn() {
        return findByTestId(this.driver, TEST_IDS.FENCE_FORM_ADD_FENCE_BTN);
    }

    get uploadBtn() {
        return findByTestId(this.driver, TEST_IDS.FENCE_FORM_UPLOAD_BTN);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    FenceFormScreen,
    TEST_IDS,
};
