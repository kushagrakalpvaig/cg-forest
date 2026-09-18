/**
 * Screen Object for hathi-bot/chat.js
 * Mirrors app/src/app/hathi-bot/chat.jsx
 */
const { findByTestId } = require('../../utils/driver.util');

const TEST_IDS = {
    HATHI_BOT_CHAT_LIST: 'hathi-bot.chat.list', // Chat conversation list
    HATHI_BOT_MESSAGE_INPUT: 'hathi-bot.message.input', // Message input field
    HATHI_BOT_MIC_BTN: 'hathi-bot.mic.btn', // Voice record mic button
    HATHI_BOT_SEND_BTN: 'hathi-bot.send.btn', // Send message button
    HATHI_BOT_LOADING_INDICATOR: 'hathi-bot.loading.indicator', // Loading response indicator
};

class ChatScreen {
    constructor(driver) {
        this.driver = driver;
    }

    static TEST_IDS = TEST_IDS;

    get chatList() {
        return findByTestId(this.driver, TEST_IDS.HATHI_BOT_CHAT_LIST);
    }

    get messageInput() {
        return findByTestId(this.driver, TEST_IDS.HATHI_BOT_MESSAGE_INPUT);
    }

    get micBtn() {
        return findByTestId(this.driver, TEST_IDS.HATHI_BOT_MIC_BTN);
    }

    get sendBtn() {
        return findByTestId(this.driver, TEST_IDS.HATHI_BOT_SEND_BTN);
    }

    get loadingIndicator() {
        return findByTestId(this.driver, TEST_IDS.HATHI_BOT_LOADING_INDICATOR);
    }

    async waitForLoaded(timeout = 10000) {
        // Default page load wait
    }
}

module.exports = {
    ChatScreen,
    TEST_IDS,
};
