import React from 'react';
import './LinkImg.css'

const LinkImg = ({val,href, imgSrc, height}) => (
  <a className="LinkImg-a" key={val} href={href} >
    <img className="LinkImg-i" src={imgSrc} alt="" />
  </a>
)

export default LinkImg;
