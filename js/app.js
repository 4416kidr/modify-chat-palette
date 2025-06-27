import { showPastedText } from './showPaste.js';

// DOMContentLoadedイベントで初期化
window.addEventListener('DOMContentLoaded', () => {
    const confirmBtn = document.getElementById('confirm-btn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', showPastedText);
    }
});
