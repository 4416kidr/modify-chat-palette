import { setLines, getLines } from './linesData.js';
import { renderLines } from './renderLines.js';
import { copyTextToClipboard } from './clipboard.js';

function showToast(message, isError = false) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    // メッセージ部分をspanでラップ
    toast.innerHTML = `<span class="toast-message">${message}</span><div class="toast-bar"></div>`;
    toast.style.background = isError ? 'rgba(200,60,60,0.97)' : 'rgba(60, 80, 120, 0.97)';
    // バーのアニメーションをリセットするため一度クラスを外す
    toast.classList.remove('show');
    void toast.offsetWidth; // 強制再描画でアニメーションリセット
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 1600);
}

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
                showToast('コピーしました!');
            } else {
                showToast('コピー失敗', true);
            }
        });
    }
});
