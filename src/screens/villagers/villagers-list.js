/**
 * Screen Object for villagers/villagers-list.js
 * Mirrors app/src/app/villagers/villagers-list.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    VILLAGERS_LIST_LIST: 'villagers-list.list', // Villagers list
    VILLAGERS_LIST_ADD_BTN: 'villagers-list.add.btn', // Add villager button
    VILLAGERS_FORM_SELECT_LOCATION_SERIAL_BTN: 'villagers-form.select-location-{serial}.btn', // Select location button
    VILLAGERS_FORM_NAME_SERIAL_INPUT: 'villagers-form.name-{serial}.input', // Villager name input
    VILLAGERS_FORM_MOBILE_SERIAL_INPUT: 'villagers-form.mobile-{serial}.input', // Villager mobile contact input
    VILLAGERS_FORM_REMOVE_SERIAL_BTN: 'villagers-form.remove-{serial}.btn', // Remove villager entry button
    VILLAGERS_FORM_ADD_MORE_BTN: 'villagers-form.add-more.btn', // Add more villager button
    VILLAGERS_FORM_SUBMIT_BTN: 'villagers-form.submit.btn', // Submit villagers button
};

class VillagersListScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get list() {
        return findByTestId(this.driver, TEST_IDS.VILLAGERS_LIST_LIST);
    }

    get addBtn() {
        return findByTestId(this.driver, TEST_IDS.VILLAGERS_LIST_ADD_BTN);
    }

    getSelectLocationSerialBtn(param) {
        return findByTestId(this.driver, TEST_IDS.VILLAGERS_FORM_SELECT_LOCATION_SERIAL_BTN.replace(/\{[^}]+\}/, param));
    }

    getNameSerialInput(param) {
        return findByTestId(this.driver, TEST_IDS.VILLAGERS_FORM_NAME_SERIAL_INPUT.replace(/\{[^}]+\}/, param));
    }

    getMobileSerialInput(param) {
        return findByTestId(this.driver, TEST_IDS.VILLAGERS_FORM_MOBILE_SERIAL_INPUT.replace(/\{[^}]+\}/, param));
    }

    getRemoveSerialBtn(param) {
        return findByTestId(this.driver, TEST_IDS.VILLAGERS_FORM_REMOVE_SERIAL_BTN.replace(/\{[^}]+\}/, param));
    }

    get addMoreBtn() {
        return findByTestId(this.driver, TEST_IDS.VILLAGERS_FORM_ADD_MORE_BTN);
    }

    get submitBtn() {
        return findByTestId(this.driver, TEST_IDS.VILLAGERS_FORM_SUBMIT_BTN);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    VillagersListScreen,
    TEST_IDS,
};
