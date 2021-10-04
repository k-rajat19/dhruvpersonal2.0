import React from 'react';
import lplogo from '../../images/signature.png';
import {Link} from 'react-router-dom';
import Header from '../Header';


export default function Cont_1() {
    return (
   <div className="cont_1-container">
    <div className="cont_1-header">
       <div className="cont_1-logo">
           <img src={lplogo} alt="signature" />
       </div>
       <Header/>
    </div>
       <div className="cont_1-content">
           <div className="cont_1-content-name">Dhruv Tuli </div>
           <div className="cont_1-content-heading">Managing Portfolio Made <br/> Easy</div>
           <div className="cont_1-content-btn">
               <button>Get Started</button>
               <Link to='#'>Watch Video</Link>
           </div>
       </div>
   </div>
    )
}
