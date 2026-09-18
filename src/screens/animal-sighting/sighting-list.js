/**
 * Screen Object for animal-sighting/sighting-list.js
 * Mirrors app/src/app/animal-sighting/sighting-list.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    ANIMAL_SIGHTING_LIST_ADD_SIGHTING_BTN: 'animal-sighting-list.add-sighting.btn', // Add sighting button
    ANIMAL_SIGHTING_LIST_PENDING_TAB_BTN: 'animal-sighting-list.pending-tab.btn', // Pending tab button
    ANIMAL_SIGHTING_LIST_PREVIOUS_TAB_BTN: 'animal-sighting-list.previous-tab.btn', // Previous sightings tab button
    ANIMAL_SIGHTING_LIST_PENDING_LIST: 'animal-sighting-list.pending.list', // Pending sightings list
    ANIMAL_SIGHTING_LIST_PREVIOUS_LIST: 'animal-sighting-list.previous.list', // Previous sightings list
    ANIMAL_SIGHTING_LIST_UPLOAD_BTN: 'animal-sighting-list.upload.btn', // Upload sightings button
};

class SightingListScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get addSightingBtn() {
        return findByTestId(this.driver, TEST_IDS.ANIMAL_SIGHTING_LIST_ADD_SIGHTING_BTN);
    }

    get pendingTabBtn() {
        return findByTestId(this.driver, TEST_IDS.ANIMAL_SIGHTING_LIST_PENDING_TAB_BTN);
    }

    get previousTabBtn() {
        return findByTestId(this.driver, TEST_IDS.ANIMAL_SIGHTING_LIST_PREVIOUS_TAB_BTN);
    }

    get pendingList() {
        return findByTestId(this.driver, TEST_IDS.ANIMAL_SIGHTING_LIST_PENDING_LIST);
    }

    get previousList() {
        return findByTestId(this.driver, TEST_IDS.ANIMAL_SIGHTING_LIST_PREVIOUS_LIST);
    }

    get uploadBtn() {
        return findByTestId(this.driver, TEST_IDS.ANIMAL_SIGHTING_LIST_UPLOAD_BTN);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    SightingListScreen,
    TEST_IDS,
};
