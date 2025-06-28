// displayAreaHandler.js
// 表示エリアの初期化・再描画・ドラッグ＆ドロップハンドラ登録を担当

import { renderLines } from '../views/renderLines.js';
import { moveLine } from '../entities/linesData.js';
import { attachDragDropHandlers } from './dragDropHandler.js';

/**
 * 表示エリアの初期化と再描画、D&Dハンドラ登録を行う
 */
export function initDisplayArea() {
    const displayArea = document.getElementById('display-area');
    if (displayArea) {
        attachDragDropHandlers(displayArea, moveLine, () => renderLines(displayArea));
        renderLines(displayArea);
    }
}
