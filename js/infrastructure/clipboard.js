// clipboard.js
// クリップボードへのコピー処理を担当

/**
 * テキストをクリップボードにコピーする
 * @param {string} text - コピーするテキスト
 * @returns {Promise<boolean>} コピー成功時はtrue、失敗時はfalse
 */
export async function copyTextToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        console.error('クリップボードへのコピーに失敗しました:', err);
        return false;
    }
}
