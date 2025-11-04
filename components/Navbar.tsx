import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <div className="flexBetween padding-container z-30 py-4 bg-white/70 absolute top-5 left-0 right-0">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={74} height={29} />
      </Link>

      <div className="flex items-center gap-4">
        <div className="md:flexCenter max-[400px]:w-40 flexCenter gap-3">
          <Image src="/call-icon.svg" alt="Call Icon" width={24} height={24} />
          <h5 className="md:regular-18 text-[0.8rem]">+233 261 671 686/+233 53 103 5235</h5>
        </div>
        <Link href="https://www.bonvastours.com" className="hidden md:inline  text-sm bg-black text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-colors" target="_blank">Bonvas Tours</Link>
      </div>
    </div>
  )
}

export default Navbar