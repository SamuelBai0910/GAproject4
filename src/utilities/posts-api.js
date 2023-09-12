// AJAX-Middle api
import sendRequest from './send-request';
const BASE_URL = '/api/posts';

export async function getPosts () {
    return sendRequest(BASE_URL);
}

export async function createPost(post) {
    return sendRequest(BASE_URL, 'POST', post);
}