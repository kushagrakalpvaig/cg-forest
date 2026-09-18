/**
 * Screen Object for account/notifications.js
 * Mirrors app/src/app/account/notifications.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    NOTIFICATIONS_BACK_BTN: 'notifications.back.btn', // notifications.back.btn
    NOTIFICATIONS_LIST: 'notifications.list', // notifications.list
    PROFILE_NOTIFICATIONS_TOGGLE_BTN: 'profile-notifications.toggle.btn', // Toggle notification settings button
};

class NotificationsScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get backBtn() {
        return findByTestId(this.driver, TEST_IDS.NOTIFICATIONS_BACK_BTN);
    }

    get list() {
        return findByTestId(this.driver, TEST_IDS.NOTIFICATIONS_LIST);
    }

    get toggleBtn() {
        return findByTestId(this.driver, TEST_IDS.PROFILE_NOTIFICATIONS_TOGGLE_BTN);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    NotificationsScreen,
    TEST_IDS,
};
