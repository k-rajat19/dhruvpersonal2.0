import React from 'react'
import c2_img1 from '../../images/Rectangle (3).png'
import c2_img2 from '../../images/Rectangle (4).png'
import c2_img3 from '../../images/Rectangle (5).png'

export default function Cont_5() {
    return (
      <div id="cont_5-container">
          <div className="cont_5_c1">
              <div>GLIMPSE</div>
              <div>GALLERY</div>
              <div></div>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
          <div className="cont_5_c2">
              <div>
                  <img src={c2_img1} alt="img" />
              </div>
              <div>
                  <img src={c2_img2} alt="img" />
              </div>
              <div>
                  <img src={c2_img3} alt="img" />
              </div>
            </div>
      </div>
    )
}
