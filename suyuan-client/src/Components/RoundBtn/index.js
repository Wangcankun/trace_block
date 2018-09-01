import React from 'react';
import './RoundBtn.css'

const RoundBtn = ({index, children}) => (
<div className="roundBtn">
  <div className={`roundBtn-round roundBtn-icon-${index}`}>
    <img src={`./${index}.jpg`} alt="" />
  </div>
  <span className="roundBtn-title">{children}</span>
</div>
)

export default RoundBtn;
