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