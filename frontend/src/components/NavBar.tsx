/* eslint-disable react/jsx-key */
import Link from "next/link";

export default function NavBar() {

  const menu = ['Home', 'Artigos', 'Sobre mim', 'Contatos'];

  return (
    <nav className="flex justify-between items-center p-6 bg-gradient-to-r from-black to-slate-800 text-white">
      <div>
        <Link href={'/'}>
          <h1 className="font-semibold">LOGO</h1>
        </Link>
      </div>
      <ul className="flex gap-5">
        {menu.map((items) => (
          <li>
            <Link 
              href={'/'} 
              key={'index'}
              className="hover:text-gray-400 duration-300"
            >
              {items}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
