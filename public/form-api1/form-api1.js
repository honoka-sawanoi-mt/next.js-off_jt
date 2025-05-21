document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("form");

	form.addEventListener("submit", (e) => {
		e.preventDefault(); //ページのリロード防止

		// エラーメッセージをクリア
		const errorElements = form.querySelectorAll(".error-message");
		for (let i = 0; i < errorElements.length; i++) {
			const el = errorElements[i];
			el.textContent = "";
			el.style.display = "none";
		}

		try {
			// それぞれのフォームのバリデーションを通過したら、フォームを送信
			// それぞれの結果を別々に保持する
			const results = [
				{
					id: "name",
					isValid: true,
					message: "名前を入力してください。",
				},
				{
					id: "age",
					isValid: true,
					message: "18歳以上の年齢を入力してください。",
				},
				{
					id: "job",
					isValid: true,
					message: "職業を選択してください。",
				},
				{
					id: "selfIntroduction",
					isValid: true,
					message: "自己紹介を入力してください。",
				},
			];

			for (const result of results) {
				// DOMの値を取得する(変数を使うことで、4つを一緒に定義)
				const element = document.getElementById(result.id);
				// フォームの値を取得する
				const value = element.value;
				// id毎にバリデーションチェック(年齢のだけ別で考える)
				if (result.id === "age") {
					result.isValid =
						!Number.isNaN(value) && Number.parseInt(value, 10) >= 18;
				} else {
					result.isValid = value.trim() !== "";
				}
			}
			// 全てのチェックが終わったら、それぞれのisValidをチェックする
			const allValid = results.every((result) => result.isValid);
			if (!allValid) {
				// catchにそれぞれの項目のメッセージとIDを渡す
				const errorMessage = results
					.filter((result) => !result.isValid)
					.map((result) => `${result.id}: ${result.message}`)
					.join("\n"); //改行して文字列に変換
				throw new Error(errorMessage);
			}
			// フォームが有効な場合、入力されたデータを JSON 形式で出力
			const formData = new FormData(form);
			const formObject = Object.fromEntries(formData.entries());
			const jsonOutput = JSON.stringify(formObject, null, 2);
			console.log(jsonOutput);
		} catch (error) {
			// エラーメッセージを処理
			const errorMessage = error.message;
			const errorArray = errorMessage.split("\n");

			// エラーメッセージを表示
			for (const item of errorArray) {
				const [id, message] = item.split(": ");
				const errorElement = document.getElementById(`${id}-error`);
				if (errorElement) {
					errorElement.textContent = message;
					errorElement.style.display = "block";
				}
			}
		}
	});
});
