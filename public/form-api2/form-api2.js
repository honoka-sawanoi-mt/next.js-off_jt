document.addEventListener("DOMContentLoaded", () => {
	const userList = document.getElementById("userList");

	fetch("https://jsonplaceholder.typicode.com/users")
		.then((res) => res.json())
		.then((users) => {
			userList.innerHTML = "";
			for (const user of users) {
				const li = document.createElement("li");
				li.innerText = user.name;
				userList.appendChild(li);
			}
		})
		.catch((error) => {
			console.error("通信エラー:", error);
			alert("データの取得に失敗しました");
		});
});
