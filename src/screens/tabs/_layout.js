/**
 * Screen Object for tabs/_layout.js
 * Mirrors app/src/app/tabs/_layout.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    TABS_HOME_TAB: 'tabs.home.tab', // tabs.home.tab
    TABS_NEWS_TAB: 'tabs.news.tab', // tabs.news.tab
    TABS_MAP_TAB: 'tabs.map.tab', // tabs.map.tab
    TABS_HELP_TAB: 'tabs.help.tab', // tabs.help.tab
};

class LayoutScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get homeTab() {
        return findByTestId(this.driver, TEST_IDS.TABS_HOME_TAB);
    }

    get newsTab() {
        return findByTestId(this.driver, TEST_IDS.TABS_NEWS_TAB);
    }

    get mapTab() {
        return findByTestId(this.driver, TEST_IDS.TABS_MAP_TAB);
    }

    get helpTab() {
        return findByTestId(this.driver, TEST_IDS.TABS_HELP_TAB);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    LayoutScreen,
    TEST_IDS,
};
