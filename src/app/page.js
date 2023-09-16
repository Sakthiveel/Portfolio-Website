import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex justify-between py-4 pl-10 pr-8 bg-slate-500">
      <div className="flex items-center gap-x-2">
        <div className="relative w-10 h-10 border ">
        <Image src="https://cdn.mos.cms.futurecdn.net/p5quSf4dZXctG9WFepXFdR.jpg" className="border rounded-3xl" fill alt="portrait"/>
        </div>
        <span>Sakthivel.S</span>
      </div>
      <div className="flex items-center border gap-x-10">
        <Link href={"/about"}>Name</Link>
        <Link href={"/"}>Name</Link>
        <Link href={"/"}>Name</Link>
        <Link href={"/"}>Name</Link>
      </div>
    </div>
  )
}
