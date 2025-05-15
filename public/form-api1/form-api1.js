document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("myform");
	const inputname = document.getElementById("username");
	const inputage = document.getElementById("age");
	const jobselect = document.getElementById("job");
	const selftextarea = document.getElementById("selfIntroduction");

	const nameError = document.getElementById("name-error");
	const ageError = document.getElementById("age-error");
	const jobError = document.getElementById("job-error");
	const selfError = document.getElementById("self-error");

	form.addEventListener("submit", (e) => {
		e.preventDefault(); //ページのリロード防止

		// エラーメッセージの初期化
		nameError.textContent = "";
		ageError.textContent = "";
		jobError.textContent = "";
		selfError.textContent = "";

		try {
			let isValid = true;

			// 名前の検証
			if (inputname.value.trim() === "") {
				nameError.textContent = "名前を入力してください。";
				nameError.style.display = "block";
				isValid = false;
			}

			// 年齢の検証
			const age = Number.parseInt(inputage.value.trim(), 10);
			if (Number.isNaN(age) || age < 18) {
				ageError.textContent = "18歳以上の年齢を入力してください。";
				ageError.style.display = "block";
				isValid = false;
			}

			// 職業の検証
			if (jobselect.value === "") {
				jobError.textContent = "職業を選択してください。";
				jobError.style.display = "block";
				isValid = false;
			}

			// 自己紹介の検証
			if (selftextarea.value.trim() === "") {
				selfError.textContent = "自己紹介を入力してください。";
				selfError.style.display = "block";
				isValid = false;
			}

			// フォームが有効な場合、データを JSON 形式で出力
			if (isValid) {
				const data = {
					username: inputname.value,
					age: inputage.value,
					job: jobselect.value,
					selfintroduction: selftextarea.value,
				};

				const jsonOutput = JSON.stringify(data, null, 2);
				console.log(jsonOutput);
			}
		} catch (error) {
			console.error("エラー", e.message);
		}
	});
});
