import { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";

export default function EditPostForm({ post, updatePost, image ,setImage }) {
  let { id } = useParams();
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
    const data = await uploadImage();
    editedPost.image = data.url;
    updatePost(editedPost);
    navigate(`/posts/${post._id}`);
  }

  return(
    <form onSubmit={_handleSubmit}>
      <h1 className='form-title'>Edit Form</h1>
      <input  name='title'
              placeholder={'Title'} 
              value={editedPost.title} 
              required
              onChange={_handleChange} />
      <textarea className='summary_text'
                name='summary'
                placeholder={'Summary'}
                value={editedPost.summary}
                required
                onChange={_handleChange} ></textarea>
      <textarea className='content_text'
                name='content'
                placeholder={'Content'}
                value={editedPost.content} 
                required
                onChange={_handleChange} ></textarea>
      <input  name='image'
              type="file"
              required
              onChange={(e) => setImage(e.target.files[0])} />
      <button>Update Post</button>
    </form>
  )
}