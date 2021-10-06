import React from 'react'
import  '../../scss/cont_1.css';
import  '../../scss/cont_2.css';
import  '../../scss/cont_3.css';
import  '../../scss/cont_4.css';
import  '../../scss/cont_5.css';
import  '../../scss/cont_6.css';
import  '../../scss/cont_7.css';
import Cont1 from './Cont_1';
import Cont2 from './Cont_2';
import Cont3 from './Cont_3';
import Cont4 from './Cont_4';
import Cont5 from './Cont_5';
import Cont6 from './Cont_6';
import Cont7 from './Cont_7';



export default function Landingpage() {
    return (
        <div style={{backgroundColor:'white',overflow:'hidden'}}>
          <Cont1/>
          <Cont2/>
          <Cont3/>
          <Cont4/>
          <Cont5/>
          <Cont6/>
          <Cont7/>
     
        </div>
    )
}
