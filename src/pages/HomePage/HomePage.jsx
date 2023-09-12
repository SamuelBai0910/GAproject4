import PostDetails from '../../components/PostDetails/PostDetails';
import './HomePage.css';

export default function HomePage() {
  return(
    <div className='HomePageMain'>
        <PostDetails />
        <PostDetails />
        <PostDetails />
    </div>
  )
}