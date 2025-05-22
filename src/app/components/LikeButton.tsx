"use client";
//userStateフックを利用してcountとsetCountを管理
import { useState } from "react";

export function LikeButton() {
	const [count, setCount] = useState(0);
	//onClickイベントでsetCountを呼び出してカウントを更新
	return (
		<button type="button" onClick={() => setCount(count + 1)}>
			👍 {count}
		</button>
	);
}
