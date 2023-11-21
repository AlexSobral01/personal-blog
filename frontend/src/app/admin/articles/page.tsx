import axios from 'axios';
import Link from 'next/link';

export default async function page() {
  await axios.get('http://localhost:3001/admin/articles')
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
  return (
    <main>
      <Link href={'/admin/articles/create'} className='text-blue-400'>Criar novo</Link>
    </main>
  )
}
