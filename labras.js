/**
 * scoreDisplay - Simple Score Visualization Utility
 * Author: MaryGiochi
 * License: Custom
 */

const scoreDisplay = {
    /**
     * Updates the text content of a score element.
     * @param {string} selector - CSS selector of the score element.
     * @param {number} score - The score to display.
     */
    update(selector, score) {
        const element = document.querySelector(selector);
        if (!element) {
            console.error(`[scoreDisplay] Element "${selector}" not found.`);
            return;
        }
        if (typeof score !== 'number') {
            console.error('[scoreDisplay] Invalid score value.');
            return;
        }
        element.textContent = `Score: ${score}`;
    },

    /**
     * Resets the score display to zero.
     * @param {string} selector - CSS selector of the score element.
     */
    reset(selector) {
        this.update(selector, 0);
    }
};

// Example usage:
// scoreDisplay.update('#scoreBoard', 150);
// scoreDisplay.reset('#scoreBoard');

module.exports = scoreDisplay;
