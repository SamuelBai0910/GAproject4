import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to='/' className='logo'>MyBlog</Link>
      <header>
        <Link className='headerA' to="/create">Create new post</Link>
        <Link className='headerA' to="" onClick={handleLogOut}>Log Out ({user.name})</Link>
      </header>
    </nav>
  );
}