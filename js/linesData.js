// linesData配列の管理用モジュール
// データの取得・設定・並び替えなどを担当

let linesData = [];

export function getLines() {
    return linesData.slice(); // コピーを返す
}

export function setLines(newLines) {
    linesData = newLines.slice();
}

export function moveLine(fromIdx, toIdx) {
    if (fromIdx === toIdx || fromIdx < 0 || toIdx < 0 || fromIdx >= linesData.length || toIdx > linesData.length) return;
    const moved = linesData.splice(fromIdx, 1)[0];
    linesData.splice(toIdx, 0, moved);
}

export function addLine(line) {
    linesData.push(line);
}

export function clearLines() {
    linesData = [];
}
