import React from 'react'





 

 

const toggle=(j)=>{
    let c1_second_heading=document.getElementsByClassName('c1_second_heading')

      for(let i=0;i<c1_second_heading.length;i++){
          let c1_second_para=document.getElementById(`c1_second_para${i}`)
          if(i===j){
            c1_second_heading[i].classList.add('active')
            c1_second_para.style.display==='none'?c1_second_para.style.display='block':''
        
          }
          else{
            c1_second_heading[i].classList.remove('active')
            c1_second_para.style.display='none'
            
          }
          
      }
}
export default function Cont_6() {
    return (
       <div id="cont_6-container">
           <div className="cont_6_c1">
               <div id='c1_first'>
                   <div>COMPANY'S VISION</div>
                   <div>Leading The Best Tax Advisor Team.</div>
                   <div></div>
                   <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
               </div>
               <div id='c1_second'>
                   <div>

                     <div className='c1_second_heading active' onClick={()=>{toggle(0)}}> First-Class Tax Solution   </div>                   
                            <p id='c1_second_para0'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis </p>
                            
                   </div>
                   <div>

                     <div className='c1_second_heading' onClick={()=>{toggle(1)}}> Tax Consultation for Business </div>                   
                            <p id='c1_second_para1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                   </div>
                 
                   <div>

                     <div className='c1_second_heading' onClick={()=>{toggle(2)}}> Best Tax & Financial Planning </div>                   
                            <p id='c1_second_para2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                   </div>
                 
               </div>

           </div>
          <div className="cont_6_c2">
              <div>Still Confused About Our Consultant?</div>
              <div>Get A Consultation</div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              <button>Contact Us</button>
          </div>
       </div>
    )
}
