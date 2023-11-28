import {Metadata} from 'next'
import Link from 'next/link'
import Tenkey from '../components/Tenkey'

export const metadata: Metadata = {
  title: 'hoge page',
}

export default function Page() {
  return (
    <>
      <Tenkey/>
      <Link href="/dashboard">Dashboard</Link>
    </>
  )
}