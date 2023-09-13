import { Link } from 'react-router-dom';

export default function PostsList ({ posts, user }) {

    if (posts.length === 0) {
        return <p>No posts yet!</p>
    }

    const postsList = posts.map((p) => (
      <div className='post'>
        <div className="image">
          <Link to={`/posts/${p._id}`}>
            <img src={ p.image } alt="" />
          </Link>
        </div>
        <div className="texts">
          <Link to={`/posts/${p._id}`}>
            <h2>{ p.title }</h2>
          </Link> 
          <p className="info">
            <span className="author">{ user.name }</span>
            <time>{ new Date(p.createdAt).toLocaleString() }</time>
          </p>
          <p className='summary'>{ p.summary}</p>
        </div>
      </div>
    ));

    return (
      <div>
      { postsList }
      </div>
    )
}