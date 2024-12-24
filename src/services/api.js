import axios from 'axios';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

export const fetchArticles = async params => {
  const { data } = await axios.get(`/search`, {
    params,
  });
  return data;
};
