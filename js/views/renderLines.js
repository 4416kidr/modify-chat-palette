// renderLines.js
// 表示エリアの描画のみを担当
import { getLines } from '../entities/linesData.js';

export function renderLines(displayArea) {
    const linesData = getLines();
    displayArea.innerHTML = '';
    linesData.forEach((line, idx) => {
        const match = line.match(/^(.*?)(【.*】)$/);
        let contentDiv = document.createElement('div');
        contentDiv.className = 'palette-line';
        contentDiv.setAttribute('draggable', 'true');
        contentDiv.setAttribute('data-idx', idx);

        if (match) {
            const commandSpan = document.createElement('span');
            commandSpan.className = 'palette-command';
            commandSpan.textContent = match[1].trim();

            const descSpan = document.createElement('span');
            descSpan.className = 'palette-desc';
            descSpan.textContent = match[2];

            contentDiv.appendChild(commandSpan);
            contentDiv.appendChild(document.createTextNode(' '));
            contentDiv.appendChild(descSpan);
        } else {
            contentDiv.textContent = line;
        }

        displayArea.appendChild(contentDiv);
    });
}
