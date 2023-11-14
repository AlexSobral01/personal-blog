import axios from 'axios';

export default async function page() {
  await axios.get('http://localhost:3001/admin/articles')
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
  return (
    <main>
    </main>
  )
}
