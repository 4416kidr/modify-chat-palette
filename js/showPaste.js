// 行データをグローバルで管理
let linesData = [];

export function showPastedText() {
    const pasteArea = document.getElementById('paste-area');
    const displayArea = document.getElementById('display-area');
    if (pasteArea && displayArea) {
        linesData = pasteArea.value.split(/\r?\n/).filter(line => line.trim() !== '');
        renderLines(displayArea);
    }
}

function renderLines(displayArea) {
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
                const moved = linesData.splice(dragSrcIdx, 1)[0];
                linesData.splice(targetIdx, 0, moved);
                renderLines(displayArea);
            }
            dragSrcIdx = null;
        });
    });
}
