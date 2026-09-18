/**
 * Backwards compatibility entry point for login automation.
 * Delegates to the modular test spec under tests/auth/login.spec.js
 */
const { testLogin } = require('./tests/auth/login.spec');
const { LoginScreen } = require('./src/screens/auth/login');

if (require.main === module) {
    testLogin().catch(console.error);
}

module.exports = {
    LoginPage: LoginScreen,
    runTest: testLogin,
};
