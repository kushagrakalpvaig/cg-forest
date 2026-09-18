/**
 * Screen Object for tabs/help.js
 * Mirrors app/src/app/tabs/help.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    HELP_IMPROVE_MAP_CARD: 'help.improve-map.card', // help.improve-map.card
    HELP_COMPENSATION_CARD: 'help.compensation.card', // help.compensation.card
};

class HelpScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get improveMapCard() {
        return findByTestId(this.driver, TEST_IDS.HELP_IMPROVE_MAP_CARD);
    }

    get compensationCard() {
        return findByTestId(this.driver, TEST_IDS.HELP_COMPENSATION_CARD);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    HelpScreen,
    TEST_IDS,
};
