/**
 * Screen Object for animal-sighting/animal-list.js
 * Mirrors app/src/app/animal-sighting/animal-list.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    ANIMAL_LIST_LIST: 'animal-list.list', // Animal list
    ANIMAL_LIST_SLUG_ITEM: 'animal-list.{slug}.item', // Animal card item
};

class AnimalListScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get list() {
        return findByTestId(this.driver, TEST_IDS.ANIMAL_LIST_LIST);
    }

    getSlugItem(param) {
        return findByTestId(this.driver, TEST_IDS.ANIMAL_LIST_SLUG_ITEM.replace(/\{[^}]+\}/, param));
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    AnimalListScreen,
    TEST_IDS,
};
