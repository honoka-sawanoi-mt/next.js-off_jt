import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "詳細ページ",
};

async function getItemDetails(id: string) {
	const items: Record<string, { name: string; description: string }> = {
		"1": { name: "相葉雅紀", description: "42歳、AB型" },
		"2": { name: "大野智", description: "44歳、A型" },
		"3": { name: "櫻井翔", description: "43歳、A型" },
		"4": { name: "二宮和也", description: "41歳、A型" },
		"5": { name: "松本潤", description: "41歳、A型" },
	};
	return items[id] || null;
}

export default async function ItemDetailPage({
	params,
}: { params: { id: string } }) {
	const item = await getItemDetails(params.id);

	if (!item) {
		return <div>アイテムが見つかりません。</div>;
	}

	return (
		<div>
			<h1>{item.name}</h1>
			<p>{item.description}</p>
			<nav>
				<Link href="/">トップページ</Link> |
				<Link href="/memos">一覧ページ</Link>
			</nav>
		</div>
	);
}
