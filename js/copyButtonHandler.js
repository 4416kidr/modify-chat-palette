// copyButtonHandler.js
// コピー処理とボタンイベント登録を担当

import { getLines } from './linesData.js';
import { copyTextToClipboard } from './clipboard.js';
import { showToast } from './toast.js';

/**
 * コピー用ボタンのイベント登録と処理を初期化する
 */
export function initCopyButton() {
    const copyBtn = document.getElementById('copy-btn');
    const displayArea = document.getElementById('display-area');
    if (copyBtn && displayArea) {
        copyBtn.addEventListener('click', async () => {
            const lines = getLines();
            const text = lines.join('\n');
            const success = await copyTextToClipboard(text);
            showToast(success ? 'コピーしました!' : 'コピー失敗', !success);
        });
    }
}
