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
        <span className='headerA'>Welcome, {user.name}</span>
        <Link className='headerA' to="" onClick={handleLogOut}>Log Out</Link>
      </header>
    </nav>
  );
}