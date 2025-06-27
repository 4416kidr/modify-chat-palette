// dragDropHandler.js
// ドラッグ＆ドロップ処理を担当

export function attachDragDropHandlers(displayArea, moveLine, rerender) {
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
                rerender();
            }
            dragSrcIdx = null;
        });
    });
}
