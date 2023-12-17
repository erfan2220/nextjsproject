import Image from 'next/image'
import Hero from '../../public/hero.png'
import Button from "@/components/Button.jsx/Button";

export default function Home() {
  return (
  <div className="container flex items-center gap-[100px]">
    <div className="item flex flex-col gap-[50px] flex-1 ">
        <h1 className="title text-[72px] bg-gradient-to-b from-[#194c33] to-[#bbb]
        bg-clip-text text-transparent">Better design for your digital products</h1>
        <p className="description text-[24px] font-light">
          Turning your idea into Reality.We bring together the teams
          from the global tech industry.
        </p>
        <Button url="contact" text="See Our Works"/>
    </div>
    <div className="item flex-1 ">
      <Image src={Hero} width={500} height={500} alt=""
             className="img w-full h-[500px] object-cover" />
    </div>
  </div>
  )
}
