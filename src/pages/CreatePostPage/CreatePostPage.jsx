import ReactQuill from 'react-quill';
export default function CreatePostPage() {
  return(
    <form action="">
      <input type="title" placeholder={'Title'} />
      <input type="summary" placeholder={'Summary'} />
      <input type="file" />
      <ReactQuill />
    </form>
  )
}