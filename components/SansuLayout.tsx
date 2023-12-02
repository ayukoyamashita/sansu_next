'use client'
import Tenkey from "./Tenkey";
import {NextUIProvider} from "@nextui-org/react";
import Question from "./Question";
import Link from "next/link";
import {Cog6ToothIcon, XMarkIcon} from '@heroicons/react/24/solid'

const SansuLayout: React.FC = () => {
  return (
    <NextUIProvider>
      <div className="text-5xl text-stone-800">
        <header className="relative flex items-center justify-center h-20 bg-blue-500 text-4xl text-white">
          かけざん<XMarkIcon className="h-8 w-8" />チャンレンジ
          <Link href="/settings" className="absolute right-5"><Cog6ToothIcon className="h-10 w-10"/></Link>
        </header>
        <main className="lg:container p-6 mx-auto flex justify-between">
          <Question/>
          <Tenkey/>
        </main>
        <aside className="fixed bottom-0 w-full bg-slate-100">
          <ol className="flex justify-between p-4 text-xl text-slate-300">
            {[...Array(9)].map((_, i) =>
              <li className="flex-1 text-center h-20 border-r-4 border-slate-300 border-dotted" key={i}>
                {i + 1}<br/>
                <img src="maru.png" alt="正解" className="m-auto w-12" />
              </li>
            )}
            <li className="flex-1 text-center h-20" key={9}>10
              <img src="batsu.png" alt="不正解" className="m-auto w-12" />
            </li>
          </ol>
        </aside>

      </div>
    </NextUIProvider>
  )
};

export default SansuLayout;