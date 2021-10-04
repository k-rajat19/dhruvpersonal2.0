import React from 'react'
import {Link} from 'react-router-dom'
import cardimg1 from '../../images/Rectangle (6).png'
import cardimg2 from '../../images/Rectangle (7).png'
import cardimg3 from '../../images/Rectangle (8).png'
import signature from '../../images/signature.png'

export default function Cont_7() {
    return (
      <div id="cont_7-container">
   <div className="cont_7_c1">
       <div>OUR BLOG</div>
       <div>Latest Blog & Articles</div>
       <div></div>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
   </div>
     <div className="cont_7_c2">
         <div className="c2_card">
             <div className='c2_card_image'>
                 <img src={cardimg1} alt="img" />
             </div>
             <div className='c2_card_text'>
                  <div>Taxation</div>
                  <div>Filing payroll taxes electronically makes good business sense</div>
                  <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et...</div>
                  <Link to="#">READ MORE</Link>
             </div>
         </div>
         <div className="c2_card">
             <div className='c2_card_image'>
                 <img src={cardimg2} alt="img" />
             </div>
             <div className='c2_card_text'>
                  <div>Insight</div>
                  <div>The first step of good tax planning is good recordkeeping</div>
                  <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et...</div>
                  <Link to="#">READ MORE</Link>
             </div>
         </div>
         <div className="c2_card">
             <div className='c2_card_image'>
                 <img src={cardimg3} alt="img" />
             </div>
             <div className='c2_card_text'>
                  <div>Finance</div>
                  <div>Here’s how taxpayers can pay the right amount of tax throughout the year</div>
                  <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et...</div>
                  <Link to="#">READ MORE</Link>
             </div>
         </div>
     </div>
     <div className="cont_7_c3">
         <div id='c3_1'>
             <div>
             <img src={signature} alt="img" />
             </div>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
         </div>
      <div id='c3_2'>
         <div className='c3_item'>
             <div>Quick Links</div>
             <div>About Us</div>
             <div>Services</div>
             <div>Cases</div>
             <div>Pricing</div>
             <div>Contact</div>
         </div>
         <div className='c3_item'>
             <div>Useful Links</div>
             <div>Privacy Policy</div>
             <div>Terms and Conditions</div>
             <div>Disclaimer</div>
             <div>Support</div>
             <div>FAQ</div>
         </div>
         <div className='c3_item'>
             <div>Contact</div>
             <div>Looking for collaboration? <br/>pajax@mail.com</div>
             <div>Visit our Office <br/>Jl. Raya Puputan No 142, Bali</div>
             <div>Monday-Friday: 08am-9pm <br/>(+62) 81 122 4341</div>
             <div style={{marginTop:50,marginRight:40}}>Copyright © 2021. All rights reserved.</div>
         </div>
        </div>
     </div>
      </div>
    )
}
