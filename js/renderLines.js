// renderLines.js
// 表示エリアの描画とドラッグ＆ドロップ処理を担当
import { getLines, moveLine } from './linesData.js';

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

    let dragSrcIdx = null;
    displayArea.querySelectorAll('.palette-line').forEach(lineEl => {
        lineEl.addEventListener('dragstart', (e) => {
            dragSrcIdx = parseInt(lineEl.getAttribute('data-idx'));
            e.dataTransfer.effectAllowed = 'move';
            lineEl.classList.add('dragging');
        });
        lineEl.addEventListener('dragend', (e) => {
            lineEl.classList.remove('dragging');
        });
        lineEl.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            lineEl.classList.add('drag-over');
        });
        lineEl.addEventListener('dragleave', (e) => {
            lineEl.classList.remove('drag-over');
        });
        lineEl.addEventListener('drop', (e) => {
            e.preventDefault();
            lineEl.classList.remove('drag-over');
            const targetIdx = parseInt(lineEl.getAttribute('data-idx'));
            if (dragSrcIdx !== null && dragSrcIdx !== targetIdx) {
                moveLine(dragSrcIdx, targetIdx);
                renderLines(displayArea);
            }
            dragSrcIdx = null;
        });
    });
}
