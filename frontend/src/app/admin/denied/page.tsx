import Link from "next/link";

export default function page() {
  return (
    <main className="grid h-full place-items-center mt-20">
      <h1 className="m-4 text-red-500 text-2xl">Acesso negado!</h1>
      <p>Você não tem permissão para proseguir</p>
      <button className="text-white hover:text-gray-200 duration-300 bg-black py-2 px-4 mt-6 rounded">
        <Link href={'/'}>	&#8592; Voltar</Link>
      </button>
    </main>
  )
}
