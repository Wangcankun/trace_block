import React, { Component } from 'react';
import {List,Button, Carousel, WingBlank,Tabs, Badge, Steps } from 'antd-mobile';

import LinkImg from '../../Components/LinkImg/'
import "./Product.css";

import nervos from '../../nervos'
import {transaction, simpleStoreContract} from '../../simpleStore'


const Item = List.Item;
const Step = Steps.Step;

const tabs = [
  { title: <Badge >商品</Badge> },
  { title: <Badge >详情</Badge> },
  { title: <Badge >评价</Badge> }
];

const customIcon = (url) => (
  <div className="icon">
    <img src={url} alt=""/>
  </div>
)


class Product extends Component {

  state = {
    slides: [
      {url:"http://limin.windub.club/h1.jpg"},
      {url:"http://limin.windub.club/h2.jpg"},
      {url:"http://limin.windub.club/h3.jpg"},
    ],
    title: "测试商品名称",
    price: "10000",
    detail: "这是一个测试用的商品，请掏钱买下它",
    type: "音响",
    location: "中国",
    qc: "罗大发",
    logs: [
      {userName: "小红", log: "令人惊喜,给个满分的评价", time: "2018-03-22", url: "http://limin.windub.club/h1.jpg"},
      {userName: "小黄", log: "令人满意", time: "2018-03-23", url: "http://limin.windub.club/h2.jpg"},
      {userName: "小绿", log: "令人高兴, 非常适合送礼", time: "2018-03-24", url: "http://limin.windub.club/h3.jpg"}
    ]
  }

  render() {
    return (
      <div id="productWrap">
        <Tabs tabs={tabs} initialPage={0} >
          {/*page one*/}

          <div className="page productPage">
            <WingBlank>
              <Carousel autoplay={true} infinite >
                {this.state.slides.map((val,index) => (
                  <LinkImg key={index} val={val} imgSrc={val.url}  />
                ))}
              </Carousel>
            </WingBlank>
            <div className="good-info">
              <span className="good-title">{this.state.title}</span>
              <span className="good-price">{this.state.price}</span>
            </div>
            <div className="good-detail">{this.state.detail}</div>
          </div>



          {/*page two*/}

          <div className="page detailPage">
            <List renderHeader={() => '商品参数'} className="my-list">
              <Item extra={this.state.title}>商品名称</Item>
              <Item extra={this.state.price}>商品价格</Item>
              <Item extra={this.state.type}>商品类型</Item>
              <Item extra={this.state.location}>商品产地</Item>
              <Item extra={this.state.qc}>生产负责人</Item>
            </List>
          </div>

          {/*page three*/}
          <div className="page commentPage">
            <Steps current={1}>
              {this.state.logs.map((val,index) => (
                <Step key={index} title={val.userName} icon={customIcon(val.url)} description={val.log} />
              ))}
            </Steps>
          </div>
        </Tabs>
        <div className="bottom">
          <Button type="primary" onClick={() => {
            nervos.appchain.getBlockNumber()
            .then((current) => {
              const tx = {
              ...transaction,
              from: window.neuron.getAccount(),
              validUntilBlock: +current + 88,
              }
              simpleStoreContract.methods.upload("", "" ).send(tx, function(err, res){
                if(res){
                    nervos.listeners.listenToTransactionReceipt(res)
                    .then(receipt => {
                      if(!receipt.errorMessage) {
                          console.log('商品上交已提交')
                      }else {
                          throw new Error(receipt.errorMessage)
                      }
                    })
                }
              })
            }).catch(err => {
              console.log(err)
            })
          }}>一键购买</Button>
        </div>
      </div>
    )
  }
}


export default Product;
