// showPaste.js
// 貼り付けテキストのセットと描画のみ担当

import { setLines } from '../entities/linesData.js';
import { renderLines } from './renderLines.js';

/**
 * テキストエリアの内容を行データとしてセットし、表示エリアを再描画する
 */
export function showPastedText() {
    const pasteArea = document.getElementById('paste-area');
    const displayArea = document.getElementById('display-area');
    if (pasteArea && displayArea) {
        const newLines = pasteArea.value.split(/\r?\n/).filter(line => line.trim() !== '');
        setLines(newLines);
        renderLines(displayArea);
    }
}
