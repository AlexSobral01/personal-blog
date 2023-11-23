'use client';

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormLogin() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await signIn('credentials', {
        redirect: false,
        email,
        password
      });

      if (!response?.error) {
        router.push('/admin')
      } else {
        setError('Email ou senha invalidos')
      }
    } catch (error){
      console.log(error)
    }
  }
  return (
    <main>
      <form className="h-full mt-20 flex flex-col items-center justify-center" onSubmit={handleLogin}>
        <h1 className="font-bold text-2xl p-4">Login Admin</h1>
        <div className="flex flex-col gap-2 items-center text-black w-4/6 max-w-lg">
          <input 
            type="email"
            placeholder="E-mail" 
            className="border p-2 w-full" 
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password"
            name='password' 
            placeholder="Senha" 
            className="border p-2 w-full"
            onChange={(e) => setPassword(e.target.value)} 
          />
          {error && <span className="text-red-400 text-sm">{error}</span>}
          <button className="bg-green-500 hover:bg-green-700 duration-300 text-white w-full py-2">Enviar</button>
        </div>
      </form>
    </main>
  )
}
