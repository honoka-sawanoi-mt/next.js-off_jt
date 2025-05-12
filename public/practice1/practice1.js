//HTMLの要素が確実に存在する状態でJavaScriptを実行できる
document.addEventListener("DOMContentLoaded", () => {
	//id="count"を持つ要素(数字そのものではない)を取得しcountnumberという変数に格納(これはなんでもいい)
	const countnumber = document.getElementById("count");
	const minusbutton = document.getElementById("minus-btn");
	const plusbutton = document.getElementById("plus-btn");
	//カウントの初期値を0に設定している(letは変数、countはカウントの値を保持する)
	let count = 0;
	//マイナスボタンがクリックされたときのイベント処理
	minusbutton.addEventListener("click", () => {
		count--; //countの値を1減少させる
		countnumber.textContent = count; //減少した新しい値をcountnumberに表示している
	});

	plusbutton.addEventListener("click", () => {
		count++;
		countnumber.textContent = count;
	});
});
