const fs = require('fs');
const path = require('path');

const DUMPS_DIR = path.resolve(__dirname, '../../dumps');

/**
 * Utility to dump Android UI hierarchy XML into dumps/
 */
async function dumpPageSource(driver, filenamePrefix = 'screen_dump') {
    try {
        if (!fs.existsSync(DUMPS_DIR)) {
            fs.mkdirSync(DUMPS_DIR, { recursive: true });
        }
        const source = await driver.getPageSource();
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filename = `${filenamePrefix}_${timestamp}.xml`;
        const filePath = path.join(DUMPS_DIR, filename);
        fs.writeFileSync(filePath, source, 'utf8');
        console.log(`[DUMPER] Saved UI hierarchy snapshot to: dumps/${filename}`);
        return filePath;
    } catch (err) {
        console.warn(`[DUMPER] Failed to dump page source: ${err.message}`);
        return null;
    }
}

module.exports = {
    dumpPageSource,
    DUMPS_DIR,
};
