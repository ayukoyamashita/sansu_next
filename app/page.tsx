import {Metadata} from 'next'
import Link from 'next/link'
import SansuLayout from "../components/SansuLayout";

export const metadata: Metadata = {
  title: 'hoge page',
}

export default function Page() {
  return (
    <div className="light">
      <SansuLayout/>
    </div>
  )
}