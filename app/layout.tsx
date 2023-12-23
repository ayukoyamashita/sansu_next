import {M_PLUS_1p} from 'next/font/google';
import './globals.css'
import {Cog6ToothIcon, XMarkIcon} from "@heroicons/react/24/solid";
import Link from "next/link";

const Font = M_PLUS_1p({
  weight: "800",
  subsets: ["latin"],
});

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
    <body className={Font.className}>
    <div className="text-5xl text-stone-800">
      <header className="relative flex items-center justify-center h-20 bg-blue-500 text-4xl text-white">
        かけざん<XMarkIcon className="h-8 w-8"/>チャンレンジ
        <Link href="/settings" className="absolute right-5"><Cog6ToothIcon className="h-10 w-10"/></Link>
      </header>

      {children}
    </div>
    </body>
    </html>
  )
}