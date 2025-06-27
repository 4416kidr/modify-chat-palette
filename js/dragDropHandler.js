// dragDropHandler.js
// ドラッグ＆ドロップ処理を担当

/**
 * パレット行のドラッグ＆ドロップイベントをdisplayAreaに付与する
 * @param {HTMLElement} displayArea - パレット行を含む要素
 * @param {(fromIdx: number, toIdx: number) => void} moveLine - 行の移動処理コールバック
 * @param {() => void} rerender - ドロップ後の再描画コールバック
 */
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
