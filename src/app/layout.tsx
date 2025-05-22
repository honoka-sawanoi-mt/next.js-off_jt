import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Today's",
};
//Readonlyはchildrenプロパティが受け取ることのできる型を示し、オブジェクトのプロパティが変更されないことを保証している
/*React.ReactNodeはchildrenが受け取ることのできる型を示している
Reactがレンダリング可能な全てのものを含む*/
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body>
				<header style={{ padding: "1rem", background: "#eee" }}>
					<h1 className="heading">Top Page</h1>
				</header>

				<main>{children}</main>

				<footer style={{ padding: "1rem", background: "#eee" }}>
					<p>© 2024 Today's App</p>
				</footer>
			</body>
		</html>
	);
}
