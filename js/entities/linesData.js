// linesData.js
// 行データ配列の管理（取得・設定・並び替え等）を担当

let linesData = [];

/**
 * 行データの配列を取得する
 * @returns {string[]} 行データのコピー
 */
export function getLines() {
    return linesData.slice(); // コピーを返す
}

/**
 * 行データの配列をセットする
 * @param {string[]} newLines - 新しい行データ
 */
export function setLines(newLines) {
    linesData = newLines.slice();
}

/**
 * 指定したインデックス間で行を移動する
 * @param {number} fromIdx - 移動元インデックス
 * @param {number} toIdx - 移動先インデックス
 */
export function moveLine(fromIdx, toIdx) {
    if (fromIdx === toIdx || fromIdx < 0 || toIdx < 0 || fromIdx >= linesData.length || toIdx > linesData.length) return;
    const moved = linesData.splice(fromIdx, 1)[0];
    linesData.splice(toIdx, 0, moved);
}

/**
 * 行データを追加する
 * @param {string} line - 追加する行
 */
export function addLine(line) {
    linesData.push(line);
}

/**
 * 行データを全てクリアする
 */
export function clearLines() {
    linesData = [];
}
