// import { useState, useEffect } from 'react';
// import * as postsService from '../../utilities/posts-service';
import PostsList from '../../components/PostsList/PostList';
import './HomePage.css';

export default function HomePage({ user, posts }) {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   postsService.getPosts().then((posts) => {
  //       setPosts(posts);
  //   });
  // }, []);
  return(
    <div className='HomePageMain'>
        <PostsList posts={posts} user={user} />
    </div>
  )
}