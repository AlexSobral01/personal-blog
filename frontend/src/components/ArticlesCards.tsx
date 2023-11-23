/* eslint-disable @next/next/no-img-element */
import Parser from 'html-react-parser'

import Link from "next/link"

interface ArticlesCardsPops {
  src: string,
  alt: string,
  title: string,
  paragraph: string,
  slug: string
}

export default function ArticlesCards({ src, alt, title, paragraph, slug }: ArticlesCardsPops) {
  return (
      <Link href={slug} className='text-slate-50 hover:text-slate-400'>
        <article className="mb-10 hover:p-2 rounded hover:bg-gray-700 duration-300">
          <img src={src} alt={alt} 
          className="h-52 mx-auto rounded-xl my-2"
          />
          <h2 className="font-semibold text-xl md:text-2xl text-center my-2">{title}</h2>
          <p className="mx-auto text-center text-gray-400 w-64 md:w-96 overflow-hidden text-ellipsis whitespace-nowrap">{Parser(paragraph)}</p>
        </article>
      </Link>
  )
}
