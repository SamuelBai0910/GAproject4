import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import * as postsService from '../../utilities/posts-service';
import HomePage from '../HomePage/HomePage';
import CreatePostPage from '../CreatePostPage/CreatePostPage';
import PostDetails from '../../components/PostDetails/PostDetails';
import EditPostPage from '../EditPostPage/EditPostPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    async function getPost() {
      const post = await postsService.getPostDetails(postId);
      setPost(post);
    }

    if (postId !== null) {getPost()}
  }, [postId]);

  useEffect(() => {
    postsService.getPosts().then((posts) => {
        setPosts(posts);
    });
  }, []);

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<HomePage posts={posts} user={user} />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/create" element={<CreatePostPage posts={posts} setPosts={setPosts} />} />
              <Route path="/posts/:id" element={<PostDetails posts={posts} setPosts={setPosts} post={post} setPost={setPost} user={user} postId={postId}
              setPostId={setPostId} />} />
              <Route path="/posts/:id/edit" element={<EditPostPage post={post} setPost={setPost} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}