/* eslint-disable @next/next/no-img-element */
'use client'

import axios from "axios"
import { useState } from "react"

interface ArticleProp {
  id: number,
  imgUrl: string,
  title: string,
  description: string,
  slug: string
}

export default function page({ params }: { params: { slug: string } } ) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState<ArticleProp[]>([]);
  axios.get('http://localhost:3001/articles')
  .then((res) => {
    const article = res.data.find((result:ArticleProp) => result.slug === params.slug)
    setData(article? [article] : [])
  })
  .catch(err => console.log(err))
  return (
    <div className="mx-10">
      {data.map((item:ArticleProp) => (
        <div key={item.id} className="flex flex-col item-center">
          <img 
            src={item.imgUrl} 
            alt={item.slug} 
            className="m-auto my-10 rounded"
          />
          <h1 className="text-3xl text-center my-5">{item.title}</h1>
          <p className="mb-10">{item.description}</p>
        </div>
      ))}
    </div>
  )
}
