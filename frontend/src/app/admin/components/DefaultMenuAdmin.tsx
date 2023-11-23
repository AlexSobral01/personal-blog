/* eslint-disable react/jsx-key */
import Link from "next/link"

export default function DefaultMenu() {
  const menu = [
    { title: 'Home', url: '/' },
    { title: 'Artigos', url: '/admin/articles' },
    { title: 'Criar artigo', url: '/admin/articles/create' },
    { title: 'Sair', url: '/' }
  ]
  return (
    <ul className="hidden md:flex gap-5">
        {menu.map((items:any) => (
          <li key={items.title}>
            <Link 
              href={items.url} 
              className="text-slate-50 hover:text-gray-400 duration-300"
            >
              {items.title}
            </Link>
          </li>
        ))}
      </ul>
  )
}
