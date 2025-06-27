// toast.js
// トースト通知専用モジュール

/**
 * トースト通知を表示する
 * @param {string} message - 表示するメッセージ
 * @param {boolean} [isError=false] - エラー時はtrue
 * @param {number} [duration=1600] - 表示時間（ミリ秒）
 */
export function showToast(message, isError = false, duration = 1600) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.innerHTML = `<span class="toast-message">${message}</span><div class="toast-bar"></div>`;
    toast.style.background = isError ? 'rgba(200,60,60,0.97)' : 'rgba(60, 80, 120, 0.97)';
    toast.classList.remove('show');
    void toast.offsetWidth;
    toast.classList.add('show');
    const bar = toast.querySelector('.toast-bar');
    if (bar) {
        bar.style.transitionDuration = duration + 'ms';
    }
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}
