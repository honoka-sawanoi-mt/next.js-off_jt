import { LikeButton } from "./components/LikeButton";
export default function Page() {
	const today = new Date().toLocaleDateString("ja-JP", {
		year: "numeric", //年月日形式で表示する
		month: "short",
		day: "numeric",
	});
	const message = "今日も頑張りましょう！";

	return (
		<>
			<h1>こんにちは！</h1>
			<p>今日は {today} です。</p>
			<p>{message}</p>
			<LikeButton />
		</>
	);
}
