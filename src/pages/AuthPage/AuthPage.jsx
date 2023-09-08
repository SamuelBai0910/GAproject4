import { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css'

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <nav>
        <Link to='/' className='logo'>MyBlog</Link>
        <button className='AuthPageButton' onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      </nav>
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
      }
    </main>
  );
}