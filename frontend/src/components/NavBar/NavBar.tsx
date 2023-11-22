'use client'

import Link from "next/link";
import MenuHamburguer from "./MobileMenu";
import DefaultMenu from "./DefaultMenu"
import { useState } from "react";

export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    if (!isOpen) {
      setIsOpen(true)
      
    } else {
      setIsOpen(false)
    }
  }

  return (
    <>
      <nav className="flex justify-between items-center p-6 bg-gradient-to-r from-black to-slate-800 text-white">
        <div>
          <Link href={'/'} className="text-white hover:text-slate-400 duration-300">
            <p className="font-bold hover:text-gray-200 h-6 duration-300">ALEX SOBRAL</p>
          </Link>
        </div>
        <DefaultMenu />
        <button onClick={openMenu} className="md:hidden" >
          <MenuHamburguer />
        </button>
      </nav>
      <div className={isOpen? "absolute h-full w-full left-0 bg-gradient-to-r from-slate-900 to-slate-700 flex items-center justify-center duration-500 z-10": "z-10 duration-500 absolute h-full w-full bg-gradient-to-r from-slate-900 to-slate-700 -left-full items-center justify-center"}>
        <ul className="h-full text-2xl flex flex-col items-center gap-10 border-b-1 mt-24">
          <li><Link href={'/'} className="text-slate-50 hover:text-gray-400 duration-300">Home</Link></li>
          <li><Link href={'/articles'} className="text-slate-50 hover:text-gray-400 duration-300">Artigos</Link></li>
          <li><Link href={'/aboutMe'} className="text-slate-50 hover:text-gray-400 duration-300">Sobre mim</Link></li>
          <li><Link href={'/contact'} className="text-slate-50 hover:text-gray-400 duration-300">Contato</Link></li>
        </ul>
      </div>
    </>
  )
}
