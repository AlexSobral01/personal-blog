'use client';

/* eslint-disable @next/next/no-img-element */
import axios from "axios"
import { FormEvent, useState } from "react";

export default function CreateArticle() {

  const [imgUrl, setImgUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const handleArticle = async(e: FormEvent) => {
    e.preventDefault()
    await axios.post('http://localhost:3001/articles', {imgUrl, title, description})
  }

  return (
    <main className="mx-6 mt-10 ">
      <form onSubmit={handleArticle}>
        <h1 className="font-semibold text-2xl text-center m-4">Novo artigo</h1>
        <div className="flex flex-col gap-2 m-auto w-96 text-black">
          <input 
            type="url" 
            name="imgUrl" 
            placeholder="Url da imagem" 
            className="p-2 rounded" 
            onChange={e => setImgUrl(e.target.value)}
          />
          <input 
            type="text" 
            name="title" 
            placeholder="Título" 
            className="p-2 rounded" 
            onChange={e => setTitle(e.target.value)}
          />
          <input 
            type="text" 
            name="description" 
            placeholder="Descrição" 
            className="px-2 pt-2 pb-12 rounded" 
            onChange={e => setDescription(e.target.value)}
          />
          <button className="bg-green-500 hover:bg-green-600 duration-200 p-2 rounded text-white">Criar</button>
        </div>
      </form>
    </main>
  )
}
