/**
 * Screen Object for account/profile.js
 * Mirrors app/src/app/account/profile.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    PROFILE_BACK_BTN: 'profile.back.btn', // profile.back.btn
    PROFILE_AVATAR_IMG: 'profile.avatar.img', // profile.avatar.img
    PROFILE_LOGOUT_BTN: 'profile.logout.btn', // profile.logout.btn
    PROFILE_DELETE_ACCOUNT_BTN: 'profile.delete-account.btn', // profile.delete-account.btn
};

class ProfileScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get backBtn() {
        return findByTestId(this.driver, TEST_IDS.PROFILE_BACK_BTN);
    }

    get avatarImg() {
        return findByTestId(this.driver, TEST_IDS.PROFILE_AVATAR_IMG);
    }

    get logoutBtn() {
        return findByTestId(this.driver, TEST_IDS.PROFILE_LOGOUT_BTN);
    }

    get deleteAccountBtn() {
        return findByTestId(this.driver, TEST_IDS.PROFILE_DELETE_ACCOUNT_BTN);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    ProfileScreen,
    TEST_IDS,
};
