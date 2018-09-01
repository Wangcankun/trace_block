import React, { Component }  from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { Link } from 'react-router';


import './About.css'

class About extends Component {
    render() {
        return <div>
            <NavBar
                mode="light"
                icon={ <Link to="/"><Icon type="left"/></Link> }
            >关于作品</NavBar>     
            <div className="info-middle">
                <h1>基于Nervos的溯源平台</h1><br/><br/>
                <p>一个高价值商品的信息溯源</p>
                <p>+</p>
                <p>电商直销平台</p><br/><br/>
                <p>作者：M303小分队</p>
                <p>时间：2018.9.1～2018.9.2</p>
            </div>
        </div>
    }
}
export default About;
