import { useState } from 'react';

export default function PostForm({ addPost, image, setImage }) {
  const [url, setUrl] = useState("");
  const [newPost, setNewPost] = useState({
    title: '',
    summary: '',
    content: '',
    image: ''
  });
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
    console.log(newPost)
    setNewPost({
      title: '',
      summary: '',
      content: '',
      image: '',
    });
  }

  return(
    <form onSubmit={_handleSubmit}>
      <input  name='title'
              placeholder={'Title'} 
              value={newPost.title} 
              onChange={_handleChange} />
      <input  name='summary'
              placeholder={'Summary'}
              value={newPost.summary}
              onChange={_handleChange} />
      <textarea name='content'
                placeholder={'Content'}
                value={newPost.content} 
                onChange={_handleChange} ></textarea>
      <input  name='image'
              type="file"
              value={newPost.image}
              onChange={(e) => setImage(e.target.files[0])} />
      <button>Create Post</button>
      <img src={url} alt="" />
    </form>
  )
}