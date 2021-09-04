import React from 'react';
import lplogo from '../images/signature.png';
import {Link} from 'react-router-dom';
import Header from './Header';


export default function Landingpage() {
    return (
   <div className="landingpage-container">
    <div className="lp-header">
       <div className="lp-logo">
           <img src={lplogo} alt="signature" />
       </div>
       <Header/>
    </div>
       <div className="lp-content">
           <div className="lp-content-name">Dhruv Tuli </div>
           <div className="lp-content-heading">Managing Portfolio Made <br/> Easy</div>
           <div className="lp-content-btn">
               <button>Get Started</button>
               <Link to='#'>Watch Video</Link>
           </div>
       </div>
   </div>
    )
}
