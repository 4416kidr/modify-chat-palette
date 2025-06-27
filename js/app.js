// app.js
// アプリケーションの初期化のみ担当

import { showPastedText } from './showPaste.js';
import { initCopyButton } from './copyButtonHandler.js';
import { initDisplayArea } from './displayAreaHandler.js';

window.addEventListener('DOMContentLoaded', () => {
    const confirmBtn = document.getElementById('confirm-btn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', showPastedText);
    }
    initCopyButton();
    initDisplayArea();
});
