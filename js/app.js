import { addHelloWorld } from './hello.js';

// DOMContentLoadedイベントで初期化
window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('hello-btn');
    btn.addEventListener('click', addHelloWorld);
});
