import { useParams } from 'react-router-dom';
import { fetchPostByPostId } from '../../services/api';
import { useHttp } from '../../hooks/useHttp';

const PostDetails = () => {
  const { postId } = useParams();
  const [post] = useHttp(fetchPostByPostId, postId);

  if (!post) {
    return <h2>Loading your post....</h2>;
  }
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};
export default PostDetails;
