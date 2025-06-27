import { setLines, getLines } from './linesData.js';
import { renderLines } from './renderLines.js';
import { copyTextToClipboard } from './clipboard.js';

export function showPastedText() {
    const pasteArea = document.getElementById('paste-area');
    const displayArea = document.getElementById('display-area');
    if (pasteArea && displayArea) {
        const newLines = pasteArea.value.split(/\r?\n/).filter(line => line.trim() !== '');
        setLines(newLines);
        renderLines(displayArea);
    }
}

// 初期化処理：コピー用ボタンのイベント登録
window.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copy-btn');
    const displayArea = document.getElementById('display-area');
    if (copyBtn && displayArea) {
        copyBtn.addEventListener('click', async () => {
            const lines = getLines();
            const text = lines.join('\n');
            const success = await copyTextToClipboard(text);
            if (success) {
                copyBtn.textContent = 'コピーしました!';
                setTimeout(() => { copyBtn.textContent = 'コピー'; }, 1200);
            } else {
                copyBtn.textContent = 'コピー失敗';
                setTimeout(() => { copyBtn.textContent = 'コピー'; }, 1200);
            }
        });
    }
});
