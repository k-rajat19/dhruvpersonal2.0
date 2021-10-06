import React from 'react'


const click =(j)=>{

    let c2_card=document.getElementsByClassName('c2-card');
    for(let i=0;i<c2_card.length; i++){
        j===i?c2_card[i].classList.add('active'):c2_card[i].classList.remove('active');  
        console.log("works") 
    }
}



export default function Cont3() {
    return (
      <div id="cont_3-container">
           <div className="cont_3_c1">
               <div>OUR SERVICES</div>
               <div>Expertise</div>
               <div></div>
               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
           </div>
      
           <div className="cont_3_c2">
              <div className='c2-card active' onClick={()=>{click(0)}}>
                  <div>
                  Insurance Tax
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className='c2-card ' onClick={()=>{click(1)}}>
                  <div>
                  Strategic Planning
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className='c2-card ' onClick={()=>{click(2)}}>
                  <div>
                  Audit & Assurancy
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className='c2-card ' onClick={()=>{click(3)}}>
                  <div>
                  Financial Planning
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className='c2-card ' onClick={()=>{click(4)}}>
                  <div>
                  Finance Secure
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className='c2-card ' onClick={()=>{click(5)}}>
                  <div>
                  Project Management
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
           </div>
          <div className="cont_3_c3">
              <div>
                 1,246 +
                 <p>Happy Clients</p>
              </div>
              <div>
                 1,025 +
                 <p>Project Complete</p>
              </div>
              <div>
                 9 +
                 <p>Years Experience</p>
              </div>
              <div>
                 43 +
                 <p>Team Members</p>
              </div>
          </div>
      </div>
    )
}
