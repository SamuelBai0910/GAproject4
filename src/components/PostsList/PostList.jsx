import { useState } from 'react';

export default function PostsList ({posts}) {
    const [reverse, setReverse] = useState(false);

    if (posts.length === 0) {
        return <p>No posts yet!</p>
    }

    const postsList = posts.map((n) => (
      <div className='post'>
      <div className="image">
        <img src={ n.image } alt="" />
      </div>
      <div className="texts">
        <h2>{ n.title }</h2>
        <p className="info">
          <span className="author">Samuel Bai</span>
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