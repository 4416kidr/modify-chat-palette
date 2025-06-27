// renderLines.js
// 表示エリアの描画のみを担当
import { getLines } from '../entities/linesData.js';

export function renderLines(displayArea) {
    const linesData = getLines();
    displayArea.innerHTML = linesData.map((line, idx) => {
        const match = line.match(/^(.*?)(【.*】)$/);
        let content;
        if (match) {
            content = `<span class='palette-command'>${match[1].trim()}</span> <span class='palette-desc'>${match[2]}</span>`;
        } else {
            content = line;
        }
        return `<div class='palette-line' draggable='true' data-idx='${idx}'>${content}</div>`;
    }).join('');
}
