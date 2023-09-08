import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './CreatePostPage.css';
import { useState } from 'react';

export default function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setcontent] = useState('');
  // React upload img with cloudinary
  const [image, setImage ] = useState("");
  const [url, setUrl] = useState("");
  const uploadImage = (e) => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "cloudinaryUpload")
    data.append("cloud_name", "dfbujyfrj")
    e.preventDefault();
    fetch(" https://api.cloudinary.com/v1_1/dfbujyfrj/image/upload",{
    method:"post",
    body: data
    })
    .then(resp => resp.json())
    .then(data => {
    setUrl(data.url)
    })
    .catch(err => console.log(data))
  }
  return(
    <form onSubmit={uploadImage} action="">
      <input type="title" 
             placeholder={'Title'} 
             value={title} 
             onChange={e => setTitle(e.target.value)} />
      <input type="summary" 
             placeholder={'Summary'}
             value={summary}
             onChange={e => setSummary(e.target.value)} />
      <input type="file"
             onChange= {(e)=> setImage(e.target.files[0])} />
      <ReactQuill 
        value={content}
        onChange={e => setcontent(e.target.value)} />
      <button>Create Post</button>
      <img src={url} alt="" />
    </form>
  )
}