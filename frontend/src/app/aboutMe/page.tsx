import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main>
      <div className="mx-6 mt-10 md:max-w-60 flex flex-col items-center">
        <Image 
          src={'/profilePictore.jpg'} 
          alt="Profile pictore" 
          width={200} height={200} 
          className="rounded"
        />
        <div className="my-6 md:max-w-3xl">
          <p>Oi, meu nome é Alex sobral sou fanatico por tecnologia ao descobrir programação na web me apaixonei pelas inumeras possibilidades e liberdade que a programação me dava, e vi nisso uma oportunidade de ganhar dinheiro fazendo o que eu gosto.</p>
          <p>Hoje busco desenvolver mais ainda minhas habilidades na web, tanto no front como no back para ter uma noção melhor de tudo.</p>
          <p>Fiz esse post para buscar apaixonados como eu na programação, pois a troca de informações foi o que mais me ajudou nessa jornada, uma dia espero fazer uma aplicação de larga escala sozinho e olhar para trás e ver o tanto que cresci como dev, caso tenha algum interesse de me contratar ou mesmo bater um papo mande uma mensagem em <Link href={'/contact'} className="text-blue-400 hover:text-blue-600 duration-300">Contato</Link>, te espero lá.</p>
        </div>
      </div>
    </main>
  )
}
