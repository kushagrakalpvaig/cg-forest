/**
 * Screen Object for dal/dal-list.js
 * Mirrors app/src/app/dal/dal-list.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    DAL_HERD_TAB_BTN: 'dal.herd-tab.btn', // DAL herd tab button
    DAL_LONER_TAB_BTN: 'dal.loner-tab.btn', // Loner tab button
    DAL_LIST: 'dal.list', // DAL herds and loners list
    DAL_ID_CARD: 'dal.{id}.card', // DAL herd card item
};

class DalListScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get herdTabBtn() {
        return findByTestId(this.driver, TEST_IDS.DAL_HERD_TAB_BTN);
    }

    get lonerTabBtn() {
        return findByTestId(this.driver, TEST_IDS.DAL_LONER_TAB_BTN);
    }

    get list() {
        return findByTestId(this.driver, TEST_IDS.DAL_LIST);
    }

    getIdCard(param) {
        return findByTestId(this.driver, TEST_IDS.DAL_ID_CARD.replace(/\{[^}]+\}/, param));
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    DalListScreen,
    TEST_IDS,
};
