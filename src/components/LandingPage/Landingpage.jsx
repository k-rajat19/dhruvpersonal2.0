import React from 'react'
import  '../../scss/cont_1.css';
import  '../../scss/cont_2.css';
import  '../../scss/cont_3.css';
import  '../../scss/cont_4.css';
import  '../../scss/cont_5.css';
import  '../../scss/cont_6.css';
import  '../../scss/cont_7.css';
import Cont_1 from './Cont_1';
import Cont_2 from './Cont_2';
import Cont_3 from './Cont_3';
import Cont_4 from './Cont_4';
import Cont_5 from './Cont_5';
import Cont_6 from './Cont_6';
import Cont_7 from './Cont_7';



export default function Landingpage() {
    return (
        <div style={{width:'100vw',backgroundColor:'white',overflow:'hidden'}}>
          <Cont_1/>
          <Cont_2/>
          <Cont_3/>
          <Cont_4/>
          <Cont_5/>
          <Cont_6/>
          <Cont_7/>
        </div>
    )
}
