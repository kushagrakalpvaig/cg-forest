const { remote } = require('webdriverio');
const { wdOpts } = require('../../config/capabilities');

/**
 * Initializes and returns a WebdriverIO remote driver session.
 */
async function createDriver(customOpts = {}) {
    const opts = {
        ...wdOpts,
        ...customOpts,
        capabilities: {
            ...wdOpts.capabilities,
            ...(customOpts.capabilities || {}),
        },
    };
    return await remote(opts);
}

/**
 * Gracefully shuts down driver session.
 */
async function closeDriver(driver) {
    if (driver) {
        try {
            await driver.pause(1000);
            await driver.deleteSession();
        } catch (e) {
            console.warn(`[DRIVER] Error closing driver session: ${e.message}`);
        }
    }
}

/**
 * Smart locator helper using testID (accessibility id / resource-id) with fallback selector.
 */
async function findByTestId(driver, testId, fallbackXPath = null) {
    if (testId) {
        // 1. Try resource-id or content-desc match
        try {
            const el = await driver.$(`//*[@resource-id="${testId}" or @content-desc="${testId}"]`);
            if (await el.isExisting()) {
                return el;
            }
        } catch (e) { }

        // 2. Try Appium accessibility ID (~testId)
        try {
            const a11yEl = await driver.$(`~${testId}`);
            if (await a11yEl.isExisting()) {
                return a11yEl;
            }
        } catch (e) { }
    }

    if (fallbackXPath) {
        return driver.$(fallbackXPath);
    }

    return driver.$(`~${testId}`);
}

module.exports = {
    createDriver,
    closeDriver,
    findByTestId,
};
