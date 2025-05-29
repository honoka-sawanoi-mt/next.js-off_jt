import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello",
};
//Readonlyはchildrenプロパティが受け取ることのできる型を示し、オブジェクトのプロパティが変更されないことを保証している
/*React.ReactNodeはchildrenが受け取ることのできる型を示している
Reactがレンダリング可能な全てのものを含む*/
export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header className="header">
          <h1 className="heading">Top Page</h1>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <p>© 2024 Hello App</p>
        </footer>
      </body>
    </html>
  );
}
