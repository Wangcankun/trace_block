import React, { Component }  from 'react'
import { NavBar, Icon, Card } from 'antd-mobile';
import { Link } from 'react-router';

import './ProductList.css';
import nervos from '../../nervos';
import { transaction, simpleStoreContract } from '../../simpleStore'

class ProductList extends Component {
    state = {
        // name: '中草药一号',
        // type: '药材',
        // origin: '云南',
        // respMan: '小明',
        // price: 100,
        data: [
            { id: 0, name: '中草药一号', type: '药材', origin: '云南', respMan: '小明', price: 100, picUrl: 'http://limin.windub.club/h1.jpg' },
            { id: 1, name: '中草药二号', type: '药材', origin: '杭州', respMan: '黎明', price: 1000, picUrl: 'http://limin.windub.club/h2.jpg' },
            { id: 2, name: '中草药一号', type: '药材', origin: '云南', respMan: '小明', price: 100, picUrl: 'http://limin.windub.club/h3.jpg' },
            { id: 3, name: '中草药二号', type: '药材', origin: '杭州', respMan: '黎明', price: 1000, picUrl: 'http://limin.windub.club/h4.jpg' },
            { id: 4, name: '中草药一号', type: '药材', origin: '云南', respMan: '小明', price: 100, picUrl: 'http://limin.windub.club/h5.jpg' },
            { id: 5, name: '中草药二号', type: '药材', origin: '杭州', respMan: '黎明', price: 1000, picUrl: 'http://limin.windub.club/h6.jpg' },
        ]
    }

    async componentDidMount() {
        const count = await nervos.appchain.peerCount();
        console.log(count)
        // simpleStoreContract.methods
        //   .getAmount(1)     //TODO： 替换
        //   .call({
        //     from: window.neuron.getAccount()
        //   })
        //   .then(text => {
        //     console.log('text:', text)
        //     var tempObj = JSON.parse(text)
        //     console.log('tempObj:', tempObj);
        //     // TODO: 处理
        //     // this.setState({ data: tempObj })
        //   })
        //   .catch(error => {
        //     console.log('error:', error)
        //     this.setState({ errorText: error })
        //   })
      }

    render() {
        const { data } = this.state;
        return <div>
            <NavBar
                mode="light"
                icon={ <Link to="/"><Icon type="left"/></Link> }
            >商品上链</NavBar> 
            {data.map(i => (
                // <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
                //     {i.label}
                // </RadioItem>
                <Card full key={i.id}>
                    <Card.Body>
                        <div>
                            <img src={i.picUrl} className="pic-img"/>
                            <span className="pic-span">{i. name}</span>
                        </div>
                    </Card.Body>
                    <Card.Footer content={"类型:"+i.type} extra={<div>产地:{i.origin}</div>} />
                </Card>
            ))}
        </div>
    }
}
export default ProductList;
