import { M_PLUS_1p } from "next/font/google";
import './globals.css'

const Font = M_PLUS_1p({
  weight: "500",
  subsets: ["latin"],
});

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
    <body className={Font.className}>{children}</body>
    </html>
  )
}