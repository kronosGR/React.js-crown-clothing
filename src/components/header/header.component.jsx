import React from 'react';
import { Link} from 'react-router-dom'

import { auth } from '../../firebase/firebase.utils'

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { firebase } from 'firebase/compat/app';


const Header = ({currentUser}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/shop">CONTACT</Link>
    </div>
    {
      currentUser ?
      <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
      :
      <Link className='option' to='/signin'>SIGN IN</Link>
    }

  </div>
)

export default Header;