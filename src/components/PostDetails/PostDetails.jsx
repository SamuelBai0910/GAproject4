import { useParams } from "react-router-dom"

export default function PostDetail ({ posts, setPosts }) {
    const { id } = useParams();
    const post = posts.find((p) => p._id === id);

    return (
        <div key={post._id} className='note'>
            <ul>
                <li>{ post.title }</li>
                <li>{ new Date(post.createdAt).toLocaleString() }</li>
                <img src={post.image} alt="" />
                <li>{ post.content }</li>
            </ul>
        </div>
    )
}
