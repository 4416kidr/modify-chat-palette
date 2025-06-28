// app.js
// アプリケーションの初期化のみ担当

import { showPastedText } from './views/showPaste.js';
import { initCopyButton } from './controllers/copyButtonHandler.js';
import { initDisplayArea } from './controllers/displayAreaHandler.js';

window.addEventListener('DOMContentLoaded', () => {
    const confirmBtn = document.getElementById('confirm-btn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', showPastedText);
    }
    initCopyButton();
    initDisplayArea();
});
