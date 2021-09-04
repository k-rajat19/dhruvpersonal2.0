import React from 'react';
import '../scss/header.css';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
    <div className='header-container'>
        <div className="desktop-header">
            <Link to='#'>Home</Link>
            <Link to='#'>About</Link>
            <Link to='#'>Courses</Link>
            <Link to='#'>Gallery</Link>
            <Link to='#'>Investing</Link>
            <Link to='#'>Blog</Link>
            <Link to='#'>Contact</Link>
            <button>Make Appointment</button>
        </div>
        
    {/*   For Mobile devices  */}
            <nav role="navigation" className='header-mobile'>
                   <div id="menuToggle">
                   <input type="checkbox" />
                   <span></span>
                   <span></span>
                   <span></span>
                   <ul id="menu">
                   <Link to='#'>Home</Link>
                    <Link to='#'>About</Link>
                     <Link to='#'>Courses</Link>
                   <Link to='#'>Gallery</Link>
                    <Link to='#'>Investing</Link>
                  <Link to='#'>Blog</Link>
                   <Link to='#'>Contact</Link>
                  <button>Make Appointment</button>
                   </ul>
                 </div>
               </nav>
        </div>

    )
}
