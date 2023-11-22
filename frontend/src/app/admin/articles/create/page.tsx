'use client';

/* eslint-disable @next/next/no-img-element */
import axios from "axios"
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreateArticle() {

  const [imgUrl, setImgUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleArticle = async() => {
    await axios.post('http://localhost:3001/articles', {imgUrl, title, description})
  }

  return (
    <main className="w-screen mx-auto mt-10">
      <form action={'/articles'} method="post" onSubmit={handleArticle}>
        <h1 className="font-semibold text-2xl text-center m-4">Novo artigo</h1>
        <div className="flex flex-col gap-2 m-auto w-96 text-black">
          <input 
            type="url" 
            name="imgUrl" 
            placeholder="Url da imagem" 
            className="p-2 w-5/6 md:w-full m-auto rounded" 
            onChange={e => setImgUrl(e.target.value)}
            required
          />
          <input 
            type="text" 
            name="title" 
            placeholder="Título" 
            className="p-2 w-5/6 md:w-full m-auto rounded" 
            onChange={e => setTitle(e.target.value)}
            required
          />
          <input 
            type="hidden" 
            value={description} 
            name="description" 
          />
          <div className="m-auto w-80 md:w-full">
            <ReactQuill 
              theme="snow" 
              className="text-blsck bg-slate-50"
              value={description} 
              placeholder="Escreva seu artigo"
              onChange={(desc) => {
                setDescription(desc)
              }} 
            />
          </div>
          <button className="bg-green-500 hover:bg-green-600 duration-200 p-2 rounded text-white m-auto w-5/6 md:w-full">Criar</button>
        </div>
      </form>
    </main>
  )
}
