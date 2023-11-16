'use client'

import ArticlesCards from "@/components/ArticlesCards";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ArticleProp {
  id: number,
  imgUrl: string,
  title: string,
  description: string,
  slug: string
}

export default function Home() {
  const [recentArticle, setRecentArticle] = useState<ArticleProp[]>([]);

  useEffect (() => {
      try {
        const getRecentArticles = async() => {
          const results = await axios.get('http://localhost:3001/articles/desc')
          setRecentArticle(results.data)  
      }
        getRecentArticles()
        } catch(err) {
        console.log(err)
      }
    }, [])

  return (
    <div className="mx-6 lg:mx-60">
      <header className="flex flex-col items-center my-10">
        <div className="flex flex-col md:items-center">
          <Image 
            src={'/profilePictore.jpg'} 
            alt="my profile pictore" 
            width={100} height={100} 
            className="rounded-full my-4" 
          />
          <h1 className="font-bold text-3xl lg:text-center my-2">Quem sou eu?</h1>
          <p className="lg:w-10/12 lg:text-center">Bem vindo ao meu blog pessoal, meu nome é Alex Sobral desde pequeno amo mexer com tecnologias e hoje estou estudando para realizar meu sonho em trabalhar nesse ramo.</p>
        </div>
      </header>
      <main className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-10">Artigos Recentes</h1>
        <div className="grid md:grid-cols-2 gap-4">
          {recentArticle.length > 0 && recentArticle.map((articles:ArticleProp) => (
            <div key={articles.id}>
              <ArticlesCards src={articles.imgUrl} alt={articles.slug} title={articles.title} paragraph={articles.description} slug={articles.slug} />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
