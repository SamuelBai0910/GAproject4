import { useParams } from "react-router-dom"

export default function PostDetail ({ posts, setPosts }) {
    const { id } = useParams();
    const post = posts.find((n) => n._id === id);

    return (
        <div key={post._id} className='note'>
            
            <ul>
                <li>{ post.title }</li>
                <img src={post.image} alt="" />
                <li>{ new Date(post.createdAt).toLocaleString() }</li>
                <li>{ post.summary }</li>
                <li>{ post.content }</li>
            </ul>
        </div>
    )
}
