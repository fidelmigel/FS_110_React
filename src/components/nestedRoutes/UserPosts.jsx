import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostsByUserId } from '../../services/api';

const UserPosts = () => {
  const { userId } = useParams();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const posts = await fetchPostsByUserId(userId);
      setPosts(posts);
    };
    getData();
  }, [userId]);
  return (
    <div>
      User posts
      <ul>
        {!posts.length && <h2>No posts yet...</h2>}
        {posts.map(item => (
          <li key={item.id}> {item.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default UserPosts;
