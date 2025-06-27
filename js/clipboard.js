// clipboard.js
// クリップボードへのコピー処理を担当

export async function copyTextToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        console.error('クリップボードへのコピーに失敗しました:', err);
        return false;
    }
}
