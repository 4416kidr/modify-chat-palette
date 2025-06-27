// app.js
// アプリケーションの初期化・イベント登録を担当

import { showPastedText } from './showPaste.js';
import { renderLines } from './renderLines.js';
import { moveLine } from './linesData.js';
import { attachDragDropHandlers } from './dragDropHandler.js';

// DOMContentLoadedイベントで初期化
window.addEventListener('DOMContentLoaded', () => {
    const confirmBtn = document.getElementById('confirm-btn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', showPastedText);
    }
    const displayArea = document.getElementById('display-area');
    if (displayArea) {
        /**
         * 表示エリアの再描画とドラッグ＆ドロップハンドラの再登録
         */
        const rerender = () => {
            renderLines(displayArea);
            attachDragDropHandlers(displayArea, moveLine, rerender);
        };
        rerender();
    }
});
