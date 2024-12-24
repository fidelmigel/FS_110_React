import { useEffect, useState } from 'react';
import { fetchArticles } from '../services/api';
import Loader from './Loader';
import Articles from './Articles/Articles';
import SearchBar from './SearchBar/SearchBar';
import toast from 'react-hot-toast';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // axios.get('https://hn.algolia.com/api/v1/search').then(res => setArticles(res.data.hits));

    const getArticlesData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { hits } = await fetchArticles(query, page);
        setArticles(prev => [...prev, ...hits]);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getArticlesData();
  }, [page, query]);

  const handleChangePage = () => {
    toast.success(`Page changed to: ${page + 1}`);
    setPage(prev => prev + 1);
  };

  const handleChangeQuery = newQuery => {
    if (newQuery === query) {
      toast.error('Please change query!');
      return;
    }
    setQuery(newQuery);
    setArticles([]);
    setPage(0);
  };
  return (
    <div className='main'>
      <h2>Articles</h2>
      <SearchBar onSearchChanged={handleChangeQuery} />
      {articles.length > 0 && <Articles articles={articles} />}

      <button onClick={handleChangePage}>Load more</button>

      {isLoading && <Loader />}
      {isError && <h2>Something went wrong! Try again...</h2>}
    </div>
  );
};
export default App;
