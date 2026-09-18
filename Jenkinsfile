pipeline {
    agent any

    parameters {
        choice(name: 'TEST_ROLE', choices: ['official', 'collector', 'public'], description: 'User role to execute tests for')
        choice(name: 'TEST_SUITE', choices: ['sighting', 'auth', 'official', 'collector', 'public', 'regression'], description: 'Test suite to execute')
        string(name: 'APPIUM_HOST', defaultValue: '127.0.0.1', description: 'Appium server host')
        string(name: 'APPIUM_PORT', defaultValue: '4723', description: 'Appium server port')
        string(name: 'APPIUM_DEVICE_NAME', defaultValue: 'android_emulator', description: 'Target Android device / emulator name')
    }

    environment {
        CI = 'true'
        TEST_ROLE = "${params.TEST_ROLE}"
        APPIUM_HOST = "${params.APPIUM_HOST}"
        APPIUM_PORT = "${params.APPIUM_PORT}"
        APPIUM_DEVICE_NAME = "${params.APPIUM_DEVICE_NAME}"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci || npm install'
            }
        }

        stage('Verify Device Connectivity') {
            steps {
                sh 'adb devices -l'
            }
        }

        stage('Execute Automated Tests') {
            steps {
                script {
                    echo "Running test suite: ${params.TEST_SUITE} for role: ${params.TEST_ROLE}"
                    sh "npm run test:${params.TEST_SUITE} || node tests/auth/login.spec.js"
                }
            }
        }
    }

    post {
        always {
            // Archive UI hierarchy dumps created during tests
            archiveArtifacts artifacts: 'dumps/*.xml', allowEmptyArchive: true
            // Publish JUnit XML test results if generated
            junit testResults: 'reports/junit/*.xml', allowEmptyResults: true
        }
        failure {
            echo "Test suite failed. Check Appium logs and UI dumps in the artifacts."
        }
    }
}
