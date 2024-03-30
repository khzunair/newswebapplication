import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Post } from "./components/Post";

type Article = {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
  message?: string;
};

function App() {
  // Example 1 | Assigning types
  const [state, setState] = useState<number>(0);
  const [articles, setArticles] = useState<Article[]>([]);

  const handleClick = () => {
    setState(state + 1);
    // console.log(state);
  };

  useEffect(() => {
    getHeadlines();
  }, []);

  // Example 2 | Fetching Data
  async function getHeadlines() {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=977fcace817f451dbd7a7ad916993974"
      );

      if (response.data.status === "ok") {
        setArticles(response.data.articles);
        // console.log(articles);
        // You won't see the updated state here because this log happens before the state is updated
      } else {
        console.log("Error Fetching Data");
      }
    } catch (error) {
      // console.log(error?.response?.data?.message);
    }
  }
  return (
    <>
      <div>
        <h1>React Typescript Starter</h1>

        <div className="p-6 m-6">
          <p className="text-2xl font-bold">Testing Here</p>
          {/* <p className='text-lg font-semibold'>Press Below</p> */}

          {/* Example 1 */}
          <p className="text-lg font-semibold">{state}</p>
          <button className="btn" onClick={handleClick}>
            Click me
          </button>

          {/* Example 3 */}
          <Post title="Zunair" id={7} toggle="clossed" />

          {/* Example 2 */}
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <h1>{article.title}</h1>
              <img src={article.urlToImage} alt={article.title} />
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noreferrer">
                Read More
              </a>
              <p>{article.publishedAt}</p>
              <div className="divide-x-0"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
