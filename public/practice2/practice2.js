//document部分にある入力欄に入力された名前の要素を取得してinputという変数に格納
const input = document.getElementById("name");
const output = document.getElementById("output");
const nextbutton = document.getElementById("btn_block");

nextbutton.addEventListener("click", () => {
	if (input.value === "") {
		//input.valueはHTMLの入力欄で入力された中身のテキストのこと
		output.innerText = "名前を入力してください";
		output.classList.remove("normal"); //黒文字をやめる(色が残っていると上手く反映されない可能性があるから、まずremoveする必要がある)
		output.classList.add("error"); // 赤文字にする
	} else {
		output.innerText = `こんにちは、${input.value}さん！`;
		output.classList.remove("error");
		output.classList.add("normal");
	}
});
