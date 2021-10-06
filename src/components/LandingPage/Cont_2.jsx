import React from 'react'
import signature from '../../images/signature (2) 1.png'
import youtube from '../../images/image 3.png'

export default function Cont2() {
    return (
     <div id="cont_2-container">
       
         <div className="cont_2_c1">

            <div>
            What we do ?
            </div>
            <div>
            Provide Stock Managment Advice and Trained 1000+ Students 
            </div>
            <div></div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <div>
                <div>
                 <p>Learn from customer feedback</p>
                 <p>Professional Team</p>
                 <p>High Savings Potential</p>
                 <p>24/7 customer support</p>
                </div>
                <div>
                 <p>Learn from customer feedback</p>
                 <p>Professional Team</p>
                 <p>High Savings Potential</p>
                 <p>24/7 customer support</p>
                </div>
            </div>
           <div>
               <img src={signature} alt="sign" />
               <div>
                   <span>Dhruv Tuli</span>
                   <span>Founder Imstocks</span>   
               </div>
           </div>
           <div id="cont_2-form">
             <form action="#">
                 <div>SEND A MESSAGE</div>
                 <div>Request a call back</div>
                 <input type="text" />
                 <input type="text" />
                 <input type="text" />
                 <textarea name="" id="" cols="30" rows="10"></textarea>
                <div>
                 <input type="checkbox" id='checkbox'/>
                 <label htmlFor="checkbox">I agree to the terms of service.</label>
                </div> 
                 <input type="submit" value='Get a Quote' />
             </form>
         </div>
         </div>
         <div className="cont_2_c2">
             <div>
                 <div>
                 Expert Advisor
                 </div>
                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula</p>
             </div>
             <div>
                 <div>
                 Stock Market Consulting
                 </div>
                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula</p>
             </div>
             <div>
                 <div>
                 Financial Planing
                 </div>
                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula</p>
             </div>
            
         </div>
         <div className="cont_2_c3">
             <img src={youtube} alt="img" />
             <div>Watch me on Youtube</div>
             <div></div>
         </div>
         <div className="cont_2_c4">
             <iframe src="https://www.youtube.com/embed/0C80kpQoiaA" title='youtube video'></iframe>
             <iframe src="https://www.youtube.com/embed/0C80kpQoiaA" title='youtube video' ></iframe>
        </div>  
     </div>

    )
}
