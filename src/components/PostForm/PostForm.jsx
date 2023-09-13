import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function PostForm({ addPost, image, setImage }) {
  const [url, setUrl] = useState("");
  const [newPost, setNewPost] = useState({
    title: '',
    summary: '',
    content: '',
    image: ''
  });
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

  const _handleChange = (e) => {
    setNewPost({
        ...newPost,
        [e.target.name]: e.target.value,
    });
  }

  async function _handleSubmit(e) {
    e.preventDefault();
    const data = await uploadImage(url);
    newPost.image = data.url;
    addPost(newPost);
    setNewPost({
      title: '',
      summary: '',
      content: '',
      image: '',
    });
    navigate(`/posts`);
  }

  return(
    <form onSubmit={_handleSubmit}>
      <h1>Create Form</h1>
      <input  name='title'
              placeholder={'Title'} 
              value={newPost.title} 
              required
              onChange={_handleChange} />
      <textarea className='summary_text'
                name='summary'
                placeholder={'Summary'}
                value={newPost.summary}
                required
                onChange={_handleChange} ></textarea>
      <textarea className='content_text'
                name='content'
                placeholder={'Content'}
                value={newPost.content} 
                required
                onChange={_handleChange} ></textarea>
      <input  name='image'
              type="file"
              required
              onChange={(e) => setImage(e.target.files[0])} />
      <button>Create Post</button>
    </form>
  )
}