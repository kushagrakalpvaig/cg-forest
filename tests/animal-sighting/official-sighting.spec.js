const { createDriver, closeDriver } = require('../../src/utils/driver.util');
const { dumpPageSource } = require('../../src/utils/dumper.util');
const { HomeScreen } = require('../../src/screens/tabs/home');
const { SightingFormScreen } = require('../../src/screens/animal-sighting/sighting-form');

async function testOfficialSighting() {
    console.log('[TEST:OFFICIAL_SIGHTING] Starting Official Sighting Flow...');
    let driver;

    try {
        driver = await createDriver();
        const home = new HomeScreen(driver);
        const sightingForm = new SightingFormScreen(driver);

        // 1. Dashboard
        await home.waitForDashboard();

        // 2. Open Official Sighting
        await home.openOfficialSighting();
        await driver.pause(2000);

        // 3. Fill Details
        await sightingForm.fillElephantCounts({ total: 2, male: 1, female: 1, calf: 0 });
        await sightingForm.enterRemarks('Automated Test: Official herd verification sighting.');

        // 4. Submit
        await sightingForm.submit();
        await driver.pause(3000);

        console.log('[TEST:OFFICIAL_SIGHTING:PASS] Official sighting test passed.');
        return true;
    } catch (err) {
        console.error(`[TEST:OFFICIAL_SIGHTING:FAIL] Failed: ${err.message}`);
        if (driver) {
            await dumpPageSource(driver, 'fail_official_sighting');
        }
        throw err;
    } finally {
        await closeDriver(driver);
    }
}

if (require.main === module) {
    testOfficialSighting().catch(() => process.exit(1));
}

module.exports = { testOfficialSighting };
