const { createDriver, closeDriver } = require('../../src/utils/driver.util');
const { dumpPageSource } = require('../../src/utils/dumper.util');
const { LoginScreen } = require('../../src/screens/auth/login');
const credentials = require('../../src/data/credentials.json');

async function testLogin(role = process.env.TEST_ROLE || 'bfo') {
    const cred = credentials[role] || credentials.bfo || credentials.official;
    console.log(`[TEST:AUTH] Starting Login Test for Role: "${role}" (${cred.mobile})`);

    let driver;
    try {
        driver = await createDriver();
        const loginScreen = new LoginScreen(driver);

        await loginScreen.waitForPageLoad();
        await loginScreen.switchToPasswordLogin();
        await driver.pause(1000);

        await loginScreen.enterCredentials(cred.mobile, cred.password);
        await driver.pause(1000);

        await loginScreen.submitLogin();
        await driver.pause(3000);

        console.log(`[TEST:AUTH:PASS] Login flow executed successfully for role: ${role}`);
        return true;
    } catch (err) {
        console.error(`[TEST:AUTH:FAIL] Login failed: ${err.message}`);
        if (driver) {
            await dumpPageSource(driver, `fail_login_${role}`);
        }
        throw err;
    } finally {
        await closeDriver(driver);
    }
}

if (require.main === module) {
    testLogin().catch(() => process.exit(1));
}

module.exports = { testLogin };
