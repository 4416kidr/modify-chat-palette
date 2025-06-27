export function showPastedText() {
    const pasteArea = document.getElementById('paste-area');
    const displayArea = document.getElementById('display-area');
    if (pasteArea && displayArea) {
        const lines = pasteArea.value.split(/\r?\n/);
        const html = lines.map(line => {
            const match = line.match(/^(.*?)(【.*】)$/);
            if (match) {
                // コマンド部分と説明部分をspanで分けてクラスを付与
                return `<div class="palette-line"><span class="palette-command">${match[1].trim()}</span> <span class="palette-desc">${match[2]}</span></div>`;
            } else {
                return `<div class="palette-line">${line}</div>`;
            }
        }).join('');
        displayArea.innerHTML = html;
    }
}
