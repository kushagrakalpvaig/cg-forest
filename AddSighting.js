/**
 * Backwards compatibility entry point for Add Sighting automation.
 * Delegates to the modular test spec under tests/help/public-sighting.spec.js
 */
const { testPublicSighting } = require('./tests/help/public-sighting.spec');
const { VillagerSightingFormScreen } = require('./src/screens/help/villager-sighting-form');

if (require.main === module) {
    testPublicSighting().catch(console.error);
}

module.exports = {
    AddSightingPage: VillagerSightingFormScreen,
    runAddSightingTest: testPublicSighting,
};
