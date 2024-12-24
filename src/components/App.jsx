import axios from 'axios';
import { useEffect, useState } from 'react';
import { fetchArticles } from '../services/api';
import { FidgetSpinner } from 'react-loader-spinner';
import Loader from './Loader';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // axios.get('https://hn.algolia.com/api/v1/search').then(res => setArticles(res.data.hits));

    const getArticlesData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { hits } = await fetchArticles('react');
        setArticles(hits);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getArticlesData();
  }, []);

  return (
    <div className='main'>
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
      {isLoading && <Loader />}
      {isError && <h2>Something went wrong! Try again...</h2>}
    </div>
  );
};
export default App;
