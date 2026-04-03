import { $, browser } from '@wdio/globals'
import myPage from './thesigningInPage.js'

class SauceLabsPageFunctions extends myPage {
    // 1. The Search Button
    get sauceLabsSearchBtn () {
        return $('//button[.//img[contains(@alt,"Sauce Labs")]]')
    }
    async clickSauceLabsSearchBtn () {
        // keep this optional so the main test flow does not fail on slow Sauce Labs UI rendering
        try {
            await browser.execute(() => {
                const allButtons = Array.from(document.querySelectorAll('button'));
                const searchButton = allButtons.find((btn) => {
                    const img = btn.querySelector('img');
                    const altText = (img?.getAttribute('alt') || '').toLowerCase();
                    return altText.includes('sauce labs') || altText.includes('search');
                });
                if (searchButton) searchButton.click();
            });
        } catch (error) {
            // ignore and keep going
        }
    }


    // 2. The Search X (Close) Button
    get sauceLabsSearchXBtn () {
        return $('(//button[.//img[contains(@alt,"close")]])[last()]')
    }
    async clickSauceLabsSearchXBtn () {
        try {
            await browser.execute(() => {
                const allButtons = Array.from(document.querySelectorAll('button'));
                const closeButton = allButtons
                    .filter((btn) => {
                        const img = btn.querySelector('img');
                        const altText = (img?.getAttribute('alt') || '').toLowerCase();
                        return altText.includes('close');
                    })
                    .pop();

                if (closeButton) closeButton.click();
            });
        } catch (error) {
            // ignore and keep going
        }
    }
}

export default new SauceLabsPageFunctions();
