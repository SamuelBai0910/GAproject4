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

export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);

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
              <Route path="/" element={<HomePage user={user} />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/create" element={<CreatePostPage posts={posts} setPosts={setPosts} />} />
              <Route path="/posts/:id" element={<PostDetails posts={posts} setPosts={setPosts} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}