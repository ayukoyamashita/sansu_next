import {Metadata} from 'next'
import Link from 'next/link'
import SansuRoot from "../components/SansuRoot";

export const metadata: Metadata = {
  title: 'かけざんチャレンジ',
}

export default function Page() {
  return (
    <div className="light">
      <SansuRoot/>
    </div>
  )
}