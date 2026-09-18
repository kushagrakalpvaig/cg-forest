/**
 * Capabilities configuration for Appium Android UiAutomator2 driver.
 * Supports environment variable overrides for CI/CD (Jenkins).
 */
const capabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': process.env.APPIUM_DEVICE_NAME || 'zx6pqknvingy5hkr',
    'appium:platformVersion': process.env.APPIUM_PLATFORM_VERSION || undefined,
    'appium:appPackage': process.env.APPIUM_APP_PACKAGE || 'com.kalpvaig.cgtracker',
    'appium:appActivity': process.env.APPIUM_APP_ACTIVITY || 'com.kalpvaig.cgtracker.MainActivity',
    'appium:noReset': process.env.APPIUM_NO_RESET !== 'false',
    'appium:ensureCleanPackageState': false,
    'appium:newCommandTimeout': 240,
    'appium:autoGrantPermissions': true,
};

const wdOpts = {
    hostname: process.env.APPIUM_HOST || '127.0.0.1',
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    path: process.env.APPIUM_PATH || '/',
    logLevel: process.env.WDIO_LOG_LEVEL || 'info',
    capabilities,
};

module.exports = {
    capabilities,
    wdOpts,
};
