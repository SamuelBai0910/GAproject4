import { useParams, useNavigate, Link } from "react-router-dom"
import * as postsService from '../../utilities/posts-service';

export default function PostDetail ({ posts, setPosts, user }) {
  const { id } = useParams();
  const post = posts.find((p) => p._id === id);
  const navigate = useNavigate();

  async function deletePost(id) {
    await postsService.deletePost(id);
    const postsAfterDelete = posts.filter((n) => n._id !== id);
    setPosts(postsAfterDelete);
    navigate('/posts');
}

  return (
    <div className="post-container">
    <div key={post._id} className="post-page">
      <h1>{ post.title }</h1>
      <time>{ new Date(post.createdAt).toLocaleString() }</time>
      <span className="author">by { user.name }</span>
      <div>
        <button className="delete-btn"
          onClick={ () => deletePost(post._id) }
        >Delete this post</button>
      </div>
      <Link to={ `/posts/${post._id}/edit` }>
         Edit Post
      </Link>
      <div className="image">
        <img src={post.image} alt="" />
      </div>
      <div className="content">
        <p>{ post.content }</p>
      </div>
    </div>
  </div>
  )
} 
