/**
 * Screen Object for tabs/home.js
 * Mirrors app/src/app/tabs/home.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    HOME_ADD_SIGHTING_BTN: 'home.add-sighting.btn',
    HOME_OTHER_ANIMALS_BTN: 'home.other-animals.btn',
    HOME_NEARBY_ELEPHANTS_BTN: 'home.nearby-elephants.btn',
    HOME_CHATBOT_BTN: 'home.chatbot.btn',
    HOME_DAL_BTN: 'home.dal.btn',
    HOME_FENCE_BTN: 'home.fence.btn',
    HOME_REPORTING_VILLAGERS_BTN: 'home.reporting-villagers.btn',
    HOME_VILLAGERS_BTN: 'home.villagers.btn',
    HOME_VERIFY_SIGHTING_BTN: 'home.verify-sighting.btn',
    HOME_SIREN_BTN: 'home.siren.btn',
    HOME_MY_POSTS_BTN: 'home.my-posts.btn',
    HOME_APP_FEEDBACK_BTN: 'home.app-feedback.btn',
    HOME_MY_REPORT_BTN: 'home.my-report.btn',
    HOME_NOTIFICATIONS_BTN: 'home.notifications.btn',
    HOME_SWITCH_LANGUAGE_BTN: 'home.switch-language.btn',
    HOME_LOCATION_MODAL: 'home.location.modal',
};

class HomeScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get headerTitle() {
        return this.driver.$('//*[@text="Gaj Sanket"]');
    }

    get addSightingBtn() {
        return findByTestId(this.driver, TEST_IDS.HOME_ADD_SIGHTING_BTN, '//*[@content-desc="Add Sighting" or @text="Add Sighting"]');
    }

    get otherAnimalsBtn() {
        return findByTestId(this.driver, TEST_IDS.HOME_OTHER_ANIMALS_BTN);
    }

    get nearbyElephantsBtn() {
        return findByTestId(this.driver, TEST_IDS.HOME_NEARBY_ELEPHANTS_BTN);
    }

    get chatbotBtn() {
        return findByTestId(this.driver, TEST_IDS.HOME_CHATBOT_BTN);
    }

    get dalBtn() {
        return findByTestId(this.driver, TEST_IDS.HOME_DAL_BTN);
    }

    get fenceBtn() {
        return findByTestId(this.driver, TEST_IDS.HOME_FENCE_BTN);
    }

    get reportingVillagersBtn() {
        return findByTestId(this.driver, TEST_IDS.HOME_REPORTING_VILLAGERS_BTN);
    }

    get villagersBtn() {
        return findByTestId(this.driver, TEST_IDS.HOME_VILLAGERS_BTN);
    }

    get verifySightingBtn() {
        return findByTestId(this.driver, TEST_IDS.HOME_VERIFY_SIGHTING_BTN);
    }

    get sirenBtn() {
        return findByTestId(this.driver, TEST_IDS.HOME_SIREN_BTN);
    }

    get myPostsBtn() {
        return findByTestId(this.driver, TEST_IDS.HOME_MY_POSTS_BTN);
    }

    get appFeedbackBtn() {
        return findByTestId(this.driver, TEST_IDS.HOME_APP_FEEDBACK_BTN);
    }

    get myReportBtn() {
        return findByTestId(this.driver, TEST_IDS.HOME_MY_REPORT_BTN);
    }

    get notificationsBtn() {
        return findByTestId(this.driver, TEST_IDS.HOME_NOTIFICATIONS_BTN);
    }

    get switchLanguageBtn() {
        return findByTestId(this.driver, TEST_IDS.HOME_SWITCH_LANGUAGE_BTN);
    }

    get locationModal() {
        return findByTestId(this.driver, TEST_IDS.HOME_LOCATION_MODAL);
    }

    get publicSightingCard() {
        return this.driver.$('//*[@text="Add Sighting(Public)" or @content-desc="Add Sighting(Public)"]');
    }

    async waitForDashboard(timeout = 10000) {
        console.log('[HOME_SCREEN] Waiting for Home Dashboard...');
        const title = await this.headerTitle;
        await title.waitForDisplayed({ timeout });
    }

    async openPublicSighting() {
        console.log('[HOME_SCREEN] Opening Public Sighting...');
        const card = await this.publicSightingCard;
        await card.waitForDisplayed({ timeout: 5000 });
        await card.click();
    }

    async openOfficialSighting() {
        console.log('[HOME_SCREEN] Opening Official Sighting...');
        const btn = await this.addSightingBtn;
        await btn.waitForDisplayed({ timeout: 5000 });
        await btn.click();
    }
}

module.exports = {
    HomeScreen,
    TEST_IDS,
};
