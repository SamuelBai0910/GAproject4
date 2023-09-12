import { useState } from 'react';
import { Link } from 'react-router-dom';
import PostDetails from '../../components/PostDetails/PostDetails';

export default function PostsList ({ posts, user }) {
    const [reverse, setReverse] = useState(false);

    if (posts.length === 0) {
        return <p>No posts yet!</p>
    }

    const postsList = posts.map((n) => (
      <div className='post'>
      <div className="image">
        <Link to="/postDetail">
          <img src={ n.image } alt="" />
        </Link>
      </div>
      <div className="texts">
        <Link to="/postDetail">
          <h2>{ n.title }</h2>
        </Link> 
        <p className="info">
          <span className="author">{ user.name }</span>
          <time>{ new Date(n.createdAt).toLocaleString() }</time>
        </p>
        <p className='summary'>{ n.summary}</p>
      </div>
    </div>
    ));

    return (
      <div>
      { postsList }
      </div>
    )
}