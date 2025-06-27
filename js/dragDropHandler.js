// dragDropHandler.js
// ドラッグ＆ドロップ処理を担当

export function attachDragDropHandlers(displayArea, moveLine, rerender) {
    let dragSrcIdx = null;
    displayArea.addEventListener('dragstart', (e) => {
        const lineEl = e.target.closest('.palette-line');
        if (!lineEl) return;
        dragSrcIdx = parseInt(lineEl.getAttribute('data-idx'));
        e.dataTransfer.effectAllowed = 'move';
        lineEl.classList.add('dragging');
    });

    displayArea.addEventListener('dragend', (e) => {
        const lineEl = e.target.closest('.palette-line');
        if (!lineEl) return;
        lineEl.classList.remove('dragging');
    });

    displayArea.addEventListener('dragover', (e) => {
        const lineEl = e.target.closest('.palette-line');
        if (!lineEl) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        lineEl.classList.add('drag-over');
    });

    displayArea.addEventListener('dragleave', (e) => {
        const lineEl = e.target.closest('.palette-line');
        if (!lineEl) return;
        lineEl.classList.remove('drag-over');
    });

    displayArea.addEventListener('drop', (e) => {
        const lineEl = e.target.closest('.palette-line');
        if (!lineEl) return;
        e.preventDefault();
        lineEl.classList.remove('drag-over');
        const targetIdx = parseInt(lineEl.getAttribute('data-idx'));
        if (dragSrcIdx !== null && dragSrcIdx !== targetIdx) {
            moveLine(dragSrcIdx, targetIdx);
            rerender();
        }
        dragSrcIdx = null;
    });
}
