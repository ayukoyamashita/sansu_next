'use client'
import Tenkey from "./Tenkey";
import {NextUIProvider} from "@nextui-org/react";
import Question from "./Question";
import Link from "next/link";
import { Cog6ToothIcon } from '@heroicons/react/24/solid'

const SansuLayout: React.FC = () => {
  return (
    <NextUIProvider>
      <div className="text-5xl text-stone-800">
        <header className="relative flex items-center justify-center h-20 bg-blue-500 text-4xl text-white">
          かけざんチャンレンジ
          <Link href="/settings" className="absolute right-5"><Cog6ToothIcon className="h-10 w-10" /></Link>
        </header>
        <main className="lg:container p-6 mx-auto flex justify-between">
          <Question/>
          <Tenkey/>
        </main>
      </div>
    </NextUIProvider>
  )
};

export default SansuLayout;