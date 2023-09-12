import './CreatePostPage.css';
import PostForm from '../../components/PostForm/PostForm';
import * as postsService from '../../utilities/posts-service';
import { useState } from 'react';

export default function CreatePostPage( {posts, setPosts}) {
  // Function to upload an image
  const [image, setImage ] = useState("");
  const [url, setUrl] = useState("");

  // React upload img with cloudinary
  const uploadImage = (e) => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "cloudinaryUpload")
    data.append("cloud_name", "dfbujyfrj")
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

  async function addPost(newPostData) {
    try {
      // Upload image
      const imageUrl = await uploadImage(newPostData.image);

      // Create new post
      const newPost = {
        title: newPostData.title,
        summary: newPostData.summary,
        content: newPostData.content,
        image: imageUrl,
      };

      // Make the API call to create the post
      const createdPost = await postsService.createPost(newPost);

      // Update the posts state with the new post
      setPosts([...posts, createdPost]);

      // Reset the form fields
      // (You should also reset the image state if needed)
      newPostData.title = '';
      newPostData.summary = '';
      newPostData.content = '';
    } catch (error) {
      console.error(error);
    }
  }

  return(
    <PostForm addPost={addPost} url={url} image={image} setImage={setImage} uploadImage={uploadImage} />
  )
}