import React, {useEffect, useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../actions';
import LocalStorageService from '../../../services/localStorageService';
import jwtDecode from 'jwt-decode';
/**
* @author
* @function Header
**/

const Header = (props) => {

  const auth = useSelector(state => state.auth);
  const [name, setName] = useState("")
  const dispatch = useDispatch();
  useEffect(() => {
        setName(auth.name);
       
  }
  )
  // const logout = () => {
  //   dispatch(logout())
  // }

  return(
    <header className="header">
        <div style={{display: 'flex'}}>
          <div className="logo">Web Messenger</div>
            
            {
              !auth.authenticated ? 
              <ul className="leftMenu">
                <li><NavLink to={'/login'}>Login</NavLink></li>
                <li><NavLink to={'/signup'}>Sign up</NavLink></li>
              </ul> : null
            }
              

            
        </div>
          <div style={{margin: '20px 0', color: '#fff', fontWeight: 'bold'}}>
            {
              
            auth.authenticated ? `Hi ${name}` : ''}
          </div>
        <ul className="menu">

            {
              console.log(auth.uid, "uiddddddddddddd"),
              auth.authenticated ?
              <li>
                <Link to={'#'} onClick={() => {
                  dispatch(logout(auth.uid))
                }}>Logout</Link>
            </li> : null
            }
          
            
             
        </ul>
    </header>
   )

 }

export default Header