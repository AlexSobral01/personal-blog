/* eslint-disable @next/next/no-img-element */

interface ArticlesCardsPops {
  src: string,
  alt: string,
  title: string,
  paragraph: string
}

export default function ArticlesCards({ src, alt, title, paragraph }: ArticlesCardsPops) {
  return (
      <article className="mb-10 hover:p-2 rounded hover:bg-gray-700 duration-300">
        <img src={src} alt={alt} 
        className="h-60 rounded-xl my-1"
        />
        <h2 className="font-semibold text-2xl my-2">{title}</h2>
        <p>{paragraph}</p>
      </article>
  )
}
