import axios from 'axios';
import { useEffect, useState } from 'react';
import { fetchArticles } from '../services/api';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // axios.get('https://hn.algolia.com/api/v1/search').then(res => setArticles(res.data.hits));

    const getArticlesData = async () => {
      try {
        const { hits } = await fetchArticles('react');
        setArticles(hits);
      } catch (error) {
        console.log(error);
      }
    };
    getArticlesData();
  }, []);

  return (
    <div>
      <h2>Articles</h2>
      <ul>
        {articles.map(item => (
          <li key={item.objectID}>
            <a href={item.url} target='_blank'>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
