import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "一覧ページ",
};

export default function MemosPage() {
	const items = [
		{ id: "1", name: "相葉雅紀" },
		{ id: "2", name: "大野智" },
		{ id: "3", name: "櫻井翔" },
		{ id: "4", name: "二宮和也" },
		{ id: "5", name: "松本潤" },
	];

	return (
		<main>
			<h1>一覧ページ</h1>
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						<Link href={`/memos/${item.id}`}>{item.name}</Link>
					</li>
				))}
			</ul>
			<nav>
				<Link href="/">トップページ</Link> |
			</nav>
		</main>
	);
}
