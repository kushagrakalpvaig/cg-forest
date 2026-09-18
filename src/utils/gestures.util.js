/**
 * Gesture and interaction helpers for Android UiAutomator2
 */
class Gestures {
    static async scrollDown(driver) {
        const { width, height } = await driver.getWindowSize();
        const startX = Math.round(width / 2);
        const startY = Math.round(height * 0.8);
        const endY = Math.round(height * 0.2);

        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: startY },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 300 },
                    { type: 'pointerMove', duration: 800, x: startX, y: endY },
                    { type: 'pointerUp', button: 0 },
                ],
            },
        ]);
        await driver.releaseActions();
        await driver.pause(1000);
    }

    static async scrollIntoView(driver, targetSelector, maxScrolls = 5) {
        for (let i = 0; i < maxScrolls; i++) {
            const el = await driver.$(targetSelector);
            if (await el.isDisplayed().catch(() => false)) {
                return el;
            }
            await this.scrollDown(driver);
        }
        return driver.$(targetSelector);
    }

    static async safeClick(element, timeout = 5000) {
        await element.waitForDisplayed({ timeout });
        await element.click();
    }
}

module.exports = Gestures;
