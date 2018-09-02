import React, { Component }  from 'react'
import { List, InputItem, WhiteSpace, Button, WingBlank, Grid, Radio, NavBar, Icon } from 'antd-mobile';
import { Link } from 'react-router';
import { transaction, simpleStoreContract } from '../../simpleStore'

import nervos from '../../nervos'

const RadioItem = Radio.RadioItem;

const data = [
    { text: '初级认证(费用100Token)', 'price': 100 },
    { text: '中级认证(费用1000Token)', 'price': 1000 },
    { text: '高级认证(费用10000Token)', 'price': 10000 },
    { text: '特级认证(费用100000Token)', 'price': 100000 },
    { text: '究级认证(费用1000000Token)', 'price': 1000000 }
];

class Company extends Component {
    state = {
        name:  '一家企业',
        regID: '440301503270924',
        regMoney: '200万美元',
        originValue: 100,
        currValue: 100
    };
    onChange = (value) => {
        this.setState({
          currValue: value
        });
    };
    onSubmit = () => {
        console.log(this.state)

        var companyInfo = {
            regID: this.state.regID,
            regMoney: this.state.regMoney,
            originValue: this.state.originValue,
            currValue: this.state.currValue
        }
        companyInfo = JSON.stringify(companyInfo);
        console.log( 'companyInfo:', companyInfo );
        var that = this;
        console.log('that.state.name:', that.state.name);
        console.log('companyInfo:', companyInfo);
        // const from = nervos.eth.accounts.wallet[0] ? nervos.eth.accounts.wallet[0].address : ''
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
                simpleStoreContract.methods.createCompany(that.state.name, companyInfo).send(tx, function(err, res) {
                    if (res) {
                        nervos.listeners.listenToTransactionReceipt(res)
                            .then(receipt => {
                                if (!receipt.errorMessage) {
                                    // that.setState({ submitText: submitTexts.submitted })
                                    console.log('receipt:', receipt);
                                } else {
                                    throw new Error(receipt.errorMessage)
                                }
                            })
                    } else {
                        // that.setState({ submitText: submitTexts.normal })
                        console.log('else');
                    }
                })
            })
            // .then(res => {
            //     if (res.hash) {
            //         alert('res:', res);
            //         return nervos.listeners.listenToTransactionReceipt(res.hash)
            //     } else {
            //         throw new Error('No Transaction Hash Received')
            //     }
            // })
            // .then(receipt => {
            //     if (!receipt.errorMessage) {
            //         // this.setState({ submitText: submitTexts.submitted })
            //         alert('receipt:', receipt);
            //     } else {
            //         throw new Error(receipt.errorMessage)
            //     }
            // })
            .catch(err => {
                // this.setState({ errorText: JSON.stringify(err) })
                console.log('err:', err)
            })
    };
    render() {
        const { name, regID, regMoney, originValue, currValue } = this.state;
        return <div>
            {/* <h2>Hello, Company!</h2>
            <p>TODO:根据钱包地址对应公司信息，判断是否已经完成资质验证</p>
            <p>TODO:  - 未完成： 表单填写公司信息，选择想要的资质等级，确定后交易</p>
            <p>TODO:  - 完成：   显示公司信息，可修改（mock）</p>  */}
            <NavBar
                mode="light"
                icon={ <Link to="/"><Icon type="left"/></Link> }
            >企业资质认证</NavBar>
            <List renderHeader={() => '资质信息'}>
                <InputItem
                    clear
                    placeholder=""
                    ref={el => this.autoFocusInst = el}
                    value={ name }
                >名称</InputItem>
                <InputItem
                    clear
                    placeholder=""
                    ref={el => this.autoFocusInst = el}
                    value={ regID }
                >注册号</InputItem>
                <InputItem
                    clear
                    placeholder=""
                    ref={el => this.autoFocusInst = el}
                    value={ regMoney }
                >资本</InputItem>
                <List renderHeader={() => '资质认证'}>
                    <WingBlank>
                        {data.map(i => (
                            <RadioItem key={i.price}  checked={currValue === i.price}
                                onChange={() => this.onChange(i.price)}>
                                {i.text}
                            </RadioItem>
                        ))}
                        <Button type="primary" onClick={() => this.onSubmit()}>立即认证</Button>
                    </WingBlank>
                </List>
            </List>

            <WhiteSpace />
        </div>
    }
}
export default Company;
