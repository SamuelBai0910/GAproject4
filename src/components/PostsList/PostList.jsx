import { useState } from 'react';

export default function PostsList ({posts}) {
    const [reverse, setReverse] = useState(false);

    if (posts.length === 0) {
        return <p>No posts yet!</p>
    }

    const postsList = posts.map((n) => (
        <div key={n._id}>
            <p>
                { new Date(n.createdAt).toLocaleString() }:
            </p>
            <p>
                { n.text }
            </p>
        </div>
    ));

    return (
        <div>
            {postsList}
        </div>
    )
}