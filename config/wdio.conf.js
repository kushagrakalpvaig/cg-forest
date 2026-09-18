const { capabilities } = require('./capabilities');

exports.config = {
    runner: 'local',
    hostname: process.env.APPIUM_HOST || '127.0.0.1',
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    path: process.env.APPIUM_PATH || '/',

    specs: [
        '../tests/**/*.spec.js',
    ],

    suites: {
        auth: [
            '../tests/auth/**/*.spec.js',
        ],
        public: [
            '../tests/auth/login.spec.js',
            '../tests/help/public-sighting.spec.js',
        ],
        official: [
            '../tests/auth/login.spec.js',
            '../tests/animal-sighting/official-sighting.spec.js',
        ],
        collector: [
            '../tests/auth/login.spec.js',
            '../tests/animal-sighting/official-sighting.spec.js',
        ],
        sighting: [
            '../tests/help/public-sighting.spec.js',
            '../tests/animal-sighting/official-sighting.spec.js',
        ],
        regression: [
            '../tests/**/*.spec.js',
        ],
    },

    maxInstances: 1,
    capabilities: [capabilities],

    logLevel: process.env.WDIO_LOG_LEVEL || 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: [],

    framework: 'mocha',
    reporters: [
        'spec',
        ['junit', {
            outputDir: './reports/junit',
            outputFileFormat: function(options) {
                return `results-${options.cid}.xml`;
            }
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 180000,
    },
};
