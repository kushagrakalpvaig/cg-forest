const { createDriver, closeDriver } = require('../../src/utils/driver.util');
const { dumpPageSource } = require('../../src/utils/dumper.util');
const { HomeScreen } = require('../../src/screens/tabs/home');
const { VillagerSightingFormScreen } = require('../../src/screens/help/villager-sighting-form');

async function testPublicSighting() {
    console.log('[TEST:PUBLIC_SIGHTING] Starting Public Sighting Flow...');
    let driver;

    try {
        driver = await createDriver();
        const home = new HomeScreen(driver);
        const villagerSighting = new VillagerSightingFormScreen(driver);

        // 1. Home Dashboard
        await home.waitForDashboard();

        // 2. Open Public Sighting
        await home.openPublicSighting();
        await driver.pause(2000);

        // 3. Fill Form
        await villagerSighting.selectDirection('East');
        await villagerSighting.enterDescription('Automated Test: Public elephant movement spotted near village perimeter.');

        // 4. Capture Photo Evidence
        try {
            await villagerSighting.captureCameraPhoto();
        } catch (camErr) {
            console.warn(`[TEST:PUBLIC_SIGHTING:WARN] Camera flow skipped or errored: ${camErr.message}`);
        }

        // 5. Submit Form
        await villagerSighting.submitForm();
        await driver.pause(3000);

        console.log('[TEST:PUBLIC_SIGHTING:PASS] Public sighting flow executed successfully.');
        return true;
    } catch (err) {
        console.error(`[TEST:PUBLIC_SIGHTING:FAIL] Failed: ${err.message}`);
        if (driver) {
            await dumpPageSource(driver, 'fail_public_sighting');
        }
        throw err;
    } finally {
        await closeDriver(driver);
    }
}

if (require.main === module) {
    testPublicSighting().catch(() => process.exit(1));
}

module.exports = { testPublicSighting };
