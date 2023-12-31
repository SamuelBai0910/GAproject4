// AJAX-Top
import * as postsAPI from './posts-api';

export async function getPosts() {
  const posts = await postsAPI.getPosts();
  return posts;
}

export async function createPost(postText) {
  const newPost = await postsAPI.createPost(postText);
  return newPost;
}

export async function getPostDetails(id) {
  console.log("hello");
  const post = await postsAPI.getPost(id);
  console.log(post);
  return post;
}

export async function deletePost(id) {
  await postsAPI.deletePost(id);
  return true;
}

export async function updatePost(id) {
  const post = await postsAPI.updatePost(id);
  console.log(post);
  return post;
}