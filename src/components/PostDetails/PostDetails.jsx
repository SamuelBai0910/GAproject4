import { useParams } from "react-router-dom"

export default function PostDetail ({ posts, setPosts, user }) {
  const { id } = useParams();
  const post = posts.find((p) => p._id === id);

  return (
  <div className="post-container">
    <div key={post._id} className="post-page">
      <h1>{ post.title }</h1>
      <time>{ new Date(post.createdAt).toLocaleString() }</time>
      <span className="author">by { user.name }</span>
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
