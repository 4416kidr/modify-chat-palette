// showPaste.js
// 貼り付けテキストの表示・トースト通知・クリップボード連携を担当

import { setLines, getLines } from './linesData.js';
import { renderLines } from './renderLines.js';
import { copyTextToClipboard } from './clipboard.js';

/**
 * トースト通知を表示する
 * @param {string} message - 表示するメッセージ
 * @param {boolean} [isError=false] - エラー時はtrue
 * @param {number} [duration=1600] - 表示時間（ミリ秒）
 */
function showToast(message, isError = false, duration = 1600) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.innerHTML = `<span class="toast-message">${message}</span><div class="toast-bar"></div>`;
    toast.style.background = isError ? 'rgba(200,60,60,0.97)' : 'rgba(60, 80, 120, 0.97)';
    toast.classList.remove('show');
    void toast.offsetWidth;
    toast.classList.add('show');
    const bar = toast.querySelector('.toast-bar');
    if (bar) {
        bar.style.transitionDuration = duration + 'ms';
    }
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

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

window.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copy-btn');
    const displayArea = document.getElementById('display-area');
    if (copyBtn && displayArea) {
        copyBtn.addEventListener('click', async () => {
            const lines = getLines();
            const text = lines.join('\n');
            const success = await copyTextToClipboard(text);
            if (success) {
                showToast('コピーしました!');
            } else {
                showToast('コピー失敗', true);
            }
        });
    }
});
