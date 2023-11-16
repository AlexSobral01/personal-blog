'use client'

import { useState } from "react"

export default function MenuHamburguer() {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    if (click == false) {
      setClick(true);
    } else {
      setClick(false);
    }
  }
  return (
    <div className={!click? "flex flex-col md:hidden gap-2 w-10 cursor-pointer": "flex flex-col md:hidden gap-2 w-10 py-[2px] cursor-pointer"} onClick={handleClick}>
      <span className={!click? "h-1 bg-white rounded duration-300 ease-in-out": "h-1 bg-white rounded translate-y-3 rotate-45 duration-300"}></span>
      <span className={!click? "h-1 bg-white rounded duration-500 ease-in-out": "opacity-0 translate-x-3 duration-500 ease-in-out"}></span>
      <span className={!click? "h-1 bg-white rounded duration-300 ease-in-out": "h-1 bg-white rounded -translate-y-2 -rotate-45 duration-300"}></span>
    </div>
  )
}
