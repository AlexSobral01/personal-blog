import ArticlesCards from "@/components/ArticlesCards";
import axios from "axios";

interface Article {
  id: number,
  imgUrl: string,
  title: string,
  description: string,
  slug: string
}

const getArticle = async() => {
  const response = await axios.get<Article[]>(
    'http://localhost:3001/articles'
  );
  
  return response.data;
};

export default async function Articles() {
  const articles = await getArticle()

  return (
    <main className="grid md:grid-cols-2 mx-6 md:mx-60 mt-10 gap-4">
      {articles.map((article:Article) => (
        <ArticlesCards key={article.id} src={article.imgUrl} alt={article.title} title={article.title} paragraph={article.description} slug={'/articles/' + article.slug}  />
      ))}
    </main>
  )
}