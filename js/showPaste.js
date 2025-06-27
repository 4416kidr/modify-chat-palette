import { setLines } from './linesData.js';
import { renderLines } from './renderLines.js';

export function showPastedText() {
    const pasteArea = document.getElementById('paste-area');
    const displayArea = document.getElementById('display-area');
    if (pasteArea && displayArea) {
        const newLines = pasteArea.value.split(/\r?\n/).filter(line => line.trim() !== '');
        setLines(newLines);
        renderLines(displayArea);
    }
}
