import { addHelloWorld } from './hello.js';
import { showPastedText } from './showPaste.js';

// DOMContentLoadedイベントで初期化
window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('hello-btn');
    btn.addEventListener('click', addHelloWorld);

    const confirmBtn = document.getElementById('confirm-btn');

    if (confirmBtn) {
        confirmBtn.addEventListener('click', showPastedText);
    }
});
