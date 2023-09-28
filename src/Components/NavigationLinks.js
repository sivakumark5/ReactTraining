import React from 'react'
import {Link,NavLink} from 'react-router-dom'

export default function NavigationLinks()
{
    const navLinkStyles = ()=>{
        return {
          padding:'1em',
          color: 'white'
          
        }
      }
    return(
        <nav>
        <NavLink to="/" style={navLinkStyles}>Home</NavLink>
        <NavLink to="/aboutus" style={navLinkStyles}>About</NavLink>
        <NavLink to="/product" style={navLinkStyles}>Collections</NavLink>
        <NavLink to="/loginpage" style={navLinkStyles}>Login Page</NavLink>
        

    </nav>

    )
}