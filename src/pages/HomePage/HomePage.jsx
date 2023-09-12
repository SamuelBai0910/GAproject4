import { useState, useEffect } from 'react';
// import PostDetails from '../../components/PostDetails/PostDetails';
import * as postsService from '../../utilities/posts-service';
import './HomePage.css';
import PostsList from '../../components/PostsList/PostList';

export default function HomePage({ user }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postsService.getPosts().then((posts) => {
        setPosts(posts);
    });
  }, []);

  return(
    <div className='HomePageMain'>
        {/* <PostDetails />
        <PostDetails />
        <PostDetails /> */}
        <PostsList posts={posts} user={user} />
    </div>
  )
}