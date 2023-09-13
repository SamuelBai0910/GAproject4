import { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";

export default function EditPostForm({ posts, updatePost, image ,setImage }) {
  let { id } = useParams();
  console.log(posts);
  const post = posts.find((p) => p._id === id);
  const [url, setUrl] = useState("");
  const [editedPost, setEditedPost] = useState(post);
  const navigate = useNavigate();
  // React upload img with cloudinary
  const uploadImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "cloudinaryUpload")
    data.append("cloud_name", "dfbujyfrj")
    return fetch(" https://api.cloudinary.com/v1_1/dfbujyfrj/image/upload",{
			method: "post",
			body: data
		}).then(res => res.json())
      .catch(err => console.log(err))
	}

  function _handleChange(e) {
    setEditedPost({
        ...editedPost,
        [e.target.name]: e.target.value
    })
  }

  async function _handleSubmit(e) {
    e.preventDefault();
    // const data = await uploadImage(url);
    // editedPost.image = data.url;
    updatePost(editedPost);
    navigate('/posts');
  }

  return(
    <form onSubmit={_handleSubmit}>
      <h1>Edit Form</h1>
      <input  name='title'
              placeholder={'Title'} 
              value={editedPost.title} 
              onChange={_handleChange} />
      <textarea className='summary_text'
                name='summary'
                placeholder={'Summary'}
                value={editedPost.summary}
                onChange={_handleChange} ></textarea>
      <textarea className='content_text'
                name='content'
                placeholder={'Content'}
                value={editedPost.content} 
                onChange={_handleChange} ></textarea>
      {/* <input  name='image'
              type="file"
              value={editedPost.image}
              onChange={(e) => setImage(e.target.files[0])} /> */}
      <button>Create Post</button>
    </form>
  )
}