import './CreatePostPage.css';
import PostForm from '../../components/PostForm/PostForm';
import * as postsService from '../../utilities/posts-service';
import { useState } from 'react';

export default function CreatePostPage( {posts, setPosts}) {
  // Function to upload an image
  const [image, setImage ] = useState("");
  console.log(posts);
  async function addPost(post) {
    try {
      // Make the API call to create the post
      const newPost = await postsService.createPost(post);
      // Update the posts state with the new post
      setPosts([...posts, newPost]);
    } catch (error) {
      console.error(error);
    }
  }
  return(
    <PostForm addPost={addPost} image={image} setImage={setImage} />
  )
}