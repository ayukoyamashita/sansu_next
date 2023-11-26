import {Metadata} from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'hoge page',
}

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">hogeHello, Next.js!</h1>
      <Link href="/dashboard">Dashboard</Link>
    </>
  )
}