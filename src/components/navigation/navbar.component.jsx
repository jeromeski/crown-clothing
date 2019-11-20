import React from 'react';
import {Link, NavLink} from 'react-router-dom'

import {Navbar, NavItem} from 'react-materialize';
import M from "materialize-css";


import {ReactComponent as Logo} from '../../assets/crown.svg';
import Hero from '../../components/slider/hero.component';

import './navbar.styles.scss';

import { auth } from '../../firebase/firebase.utils';

class Navigation extends React.Component {

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems, {});
    });
  }
  

  render() {
    const { currentUser } = this.props
    return(
      <Navbar className='nav' brand={
        <Link to='/' onClick={() => {Hero.forceUpdate()}}>
          <Logo  /> 
        </Link>
      }
        alignLinks="right">
        <NavLink exact activeClassName='is-active' to='/' onClick={() => {Hero.forceUpdate()}}>Home</NavLink>
        <NavLink  activeClassName='is-active' to='/shop'>Shop</NavLink>
        <NavLink  activeClassName='is-active' to='/contact'>Contact</NavLink>
        {
          currentUser ?
          <NavItem className='signout' onClick={() => auth.signOut()}>Sign Out</NavItem>:
          <NavLink exact activeClassName='is-active' to='/signin'>Sign In</NavLink>
        }
      </Navbar>
    )
  }
}

export default Navigation;
