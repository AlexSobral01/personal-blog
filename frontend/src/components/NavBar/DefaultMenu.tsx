/* eslint-disable react/jsx-key */
import Link from "next/link"

export default function DefaultMenu() {
  const menu = [
    { title: 'Home', url: '/' },
    { title: 'Artigos', url: '/articles' },
    { title: 'Sobre mim', url: '/aboutMe' },
    { title: 'Contato', url: '/contact' }
  ]
  return (
    <ul className="hidden md:flex gap-5">
        {menu.map((items:any) => (
          <li key={items.title}>
            <Link 
              href={items.url} 
              className="hover:text-gray-400 duration-300"
            >
              {items.title}
            </Link>
          </li>
        ))}
      </ul>
  )
}
