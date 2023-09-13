import './EditPostPage.css';
import EditPostForm from '../../components/EditPostForm/EditPostForm';
import * as postsService from '../../utilities/posts-service';
import { useState } from 'react';

export default function EditPostPage( {posts, setPosts} ) {
  // Function to upload an image
  const [image, setImage ] = useState("");

  async function updatePost(post) {
    try {
      // Make the API call to create the post
      const editedPost = await postsService.updatePost(post);
      // Update the posts state with the new post
      setPosts(editedPost);
    } catch (error) {
      console.error(error);
    }
  }
  return(
    <EditPostForm posts={posts} updatePost={updatePost} image={image} setImage={setImage} />
  )
}