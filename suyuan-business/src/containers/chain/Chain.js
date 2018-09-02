import React, { Component }  from 'react'
import { List, InputItem, WhiteSpace, Button, WingBlank, Grid, Radio, NavBar, Icon, ImagePicker, SegmentedControl } from 'antd-mobile';
import { Link } from 'react-router';
import { transaction, simpleStoreContract } from '../../simpleStore'

import nervos from '../../nervos'

class Chain extends Component {
    state = {
        name: '中草药一号',
        type: '药材',
        origin: '云南',
        respMan: '小明',
        price: 100,
        submitText: '上链',
        files: [
            { url: 'http://limin.windub.club/h' + Math.ceil(Math.random() *6) + '.jpg', id: '12345' }
        ],
    }
    onSubmit = () => {
        console.log(this.state)
        var productInfo = {
            name: this.state.name,
            type: this.state.type,
            origin: this.state.origin,
            respMan: this.state.respMan,
            price: this.state.price,
            picUrl: this.state.files[0].url
        }
        var that = this;
        productInfo = JSON.stringify(productInfo);
        console.log('productInfo:', productInfo);
        const from = window.neuron.getAccount();
        console.log(from)
        
        nervos.appchain
            .getBlockNumber()
            .then(current => {
                console.log('current:', current)
                const tx = {
                    ...transaction,
                    from: window.neuron.getAccount(),
                    validUntilBlock: +current + 88,
                }
                console.log('tx:', tx);
                console.log('simpleStoreContract:', simpleStoreContract);
                // simpleStoreContract.methods.add('666', 151238103).send(tx, function(err, res) {
                // simpleStoreContract.methods.createCompany(that.state.name, that.state.companyInfo).send(tx, function(err, res) {
                simpleStoreContract.methods.upload(that.state.name, productInfo).send(tx, function(err, res) {
                    if (res) {
                        nervos.listeners.listenToTransactionReceipt(res)
                            .then(receipt => {
                                if (!receipt.errorMessage) { 
                                    that.setState({ submitText: '商品上链申请已提交' })
                                    // console.log('receipt:', receipt);
                                } else {
                                    throw new Error(receipt.errorMessage)
                                }
                            })
                    } else {
                        that.setState({ submitText: '商品上链申请提交失败' })
                        console.log('else');
                    }
                })
            })
            .catch(err => {
                this.setState({ submitText: '商品上链申请提交失败' })
                console.log('err:', err);
            })
    };
    render() {
        const { name, type, origin, respMan, price, files, submitText } = this.state;

        return <div>    
            <NavBar
                mode="light"
                icon={ <Link to="/"><Icon type="left"/></Link> }
            >商品上链</NavBar>            
            <List renderHeader={() => '商品信息'}>
                <InputItem
                    clear
                    placeholder=""
                    ref={el => this.autoFocusInst = el}
                    value={name}
                >名称</InputItem>
                <InputItem
                    clear
                    placeholder=""
                    ref={el => this.autoFocusInst = el}
                    value={price}
                >价格</InputItem>
                <InputItem
                    clear
                    placeholder=""
                    ref={el => this.autoFocusInst = el}
                    value={type}
                >类型</InputItem>
                <InputItem
                    clear
                    placeholder=""
                    ref={el => this.autoFocusInst = el}
                    value={origin}
                >产地</InputItem>
                <InputItem
                    clear
                    placeholder=""
                    ref={el => this.autoFocusInst = el}
                    value={respMan}
                >责任人</InputItem>
                <ImagePicker files={files}/>
                <WingBlank>
                    <Button type="primary" onClick={() => this.onSubmit()}>{submitText}</Button>
                </WingBlank>
            </List>
            <WhiteSpace />  
        </div>            
    }
}
export default Chain;
