import React from 'react';
import Header from '../Header';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <div style={{background:'black'}}>
        
        {props.children}
    </div>
   )

 }

export default Layout