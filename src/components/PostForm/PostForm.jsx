// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

// React-Quill upload options
// const modules = {
//   toolbar: [
//     [{ 'header': [1, 2, false] }],
//     ['bold', 'italic', 'underline','strike', 'blockquote'],
//     [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
//     ['link', 'image'],
//     ['clean']
//   ],
// };

// const formats = [
//   'header',
//   'bold', 'italic', 'underline', 'strike', 'blockquote',
//   'list', 'bullet', 'indent',
//   'link', 'image'
// ];

export default function CreatePostPage( {addPost, uploadImage, image, setImage, url} ) {
  const [newPost, setNewPost] = useState({
    title: '',
    summary: '',
    content: '',
    image: null,
  });

  // for react quill
  // const handleContentChange = (value) => {
  //   setNewPost({
  //     ...newPost,
  //     content: value,
  //   });
  // };

  const _handleSubmit = (e) => {
    e.preventDefault();
    addPost(newPost);
    uploadImage(image);
    setNewPost({
      title: '',
      summary: '',
      content: '',
      image: '',
    });
  }

  return(
    <form onSubmit={_handleSubmit} action="">
      <input placeholder={'Title'} 
             value={newPost.title} 
             onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} />
      <input placeholder={'Summary'}
             value={newPost.summary}
             onChange={(e) => setNewPost({ ...newPost, summary: e.target.value })} />
      <input type="file"
             value={newPost.image}
             onChange={(e) => setImage(e.target.files[0])} />
      <textarea placeholder={'Content'}
                value={newPost.content} 
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })} ></textarea>
      {/* <ReactQuill 
        modules={modules}
        formats={formats}
        value={newPost.content}
        onChange={handleContentChange} /> */}
      <button>Create Post</button>
      <img src={url} alt="" />
    </form>
  )
}