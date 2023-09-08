import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './CreatePostPage.css';

export default function CreatePostPage() {
  return(
    <form action="">
      <input type="title" placeholder={'Title'} />
      <input type="summary" placeholder={'Summary'} />
      <input type="file" />
      <ReactQuill />
      <button>Create Post</button>
    </form>
  )
}