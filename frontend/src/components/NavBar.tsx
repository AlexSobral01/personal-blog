/* eslint-disable react/jsx-key */
import Link from "next/link";

export default function NavBar() {

  const menu = [
    { title: 'Home', url: '/' },
    { title: 'Artigos', url: '/articles' },
    { title: 'Sobre mim', url: '/aboutMe' },
    { title: 'Contato', url: '/contact' }
  ]

  return (
    <nav className="flex justify-between items-center p-6 bg-gradient-to-r from-black to-slate-800 text-white">
      <div>
        <Link href={'/'}>
          <h1 className="font-semibold">LOGO</h1>
        </Link>
      </div>
      <ul className="flex gap-5">
        {menu.map((items:any, index) => (
          <li>
            <Link 
              href={items.url} 
              key={index}
              className="hover:text-gray-400 duration-300"
            >
              {items.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
