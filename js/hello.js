// helloworldをpタグでbodyに追加する関数
export function addHelloWorld() {
    const p = document.createElement('p');
    p.textContent = 'helloworld';
    document.body.appendChild(p);
}
