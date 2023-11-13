import ArticlesCards from "@/components/ArticlesCards";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-6 md:mx-60">
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
          <ArticlesCards src="https://cdn.pixabay.com/photo/2017/02/19/23/09/success-2081167_1280.jpg" alt="Em desenvolvimento" title="Em desenvolvimento" paragraph="Esse artigo está em desenvolvimento" />
          <ArticlesCards src="https://cdn.pixabay.com/photo/2017/02/19/23/09/success-2081167_1280.jpg" alt="Em desenvolvimento" title="Em desenvolvimento" paragraph="Esse artigo está em desenvolvimento" />
          <ArticlesCards src="https://cdn.pixabay.com/photo/2017/02/19/23/09/success-2081167_1280.jpg" alt="Em desenvolvimento" title="Em desenvolvimento" paragraph="Esse artigo está em desenvolvimento" />
        </div>
      </main>
    </div>
  )
}
