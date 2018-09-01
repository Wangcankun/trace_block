import React, { Component } from 'react';
import { Carousel, WingBlank, List } from 'antd-mobile';
import LinkImg from '../../Components/LinkImg/'
import RoundBtn from '../../Components/RoundBtn/'
import Navbar from '../../Components/Navbar/'
import './Home.css'

const Item = List.Item;
const Brief = Item.Brief;

class Home extends Component {

  state = {
  slides: [
    {id: "0", url: "http://limin.windub.club/h1.jpg"},
    {id: "1", url: "http://limin.windub.club/h2.jpg"},
    {id: "2", url: "http://limin.windub.club/h3.jpg"},
    {id: "3", url: "http://limin.windub.club/h4.jpg"},
  ],
    roundBtns: [
      {title: "分类一"},
      {title: "分类二"},
      {title: "分类三"},
      {title: "分类四"}
    ],
    goods: [
    {title: "爱马仕", price: "9999", detail: "法国著名奢侈品牌", image: "http://limin.windub.club/h1.jpg"},
    {title: "范思哲", price: "9999", detail: "法国著名奢侈品牌", image: "http://limin.windub.club/h2.jpg"},
    {title: "范思哲", price: "9999", detail: "法国著名奢侈品牌", image: "http://limin.windub.club/h3.jpg"},
    {title: "范思哲", price: "9999", detail: "法国著名奢侈品牌", image: "http://limin.windub.club/h4.jpg"},
    ]

  }
  componentDidMount() {
  }

  render() {
    return (
      <div id="Home-wrap">
        {/* slider */}
        <WingBlank>
          <Carousel autoplay={true} infinite >
            {this.state.slides.map((val,index) => (
              <LinkImg key={index} val={val} href={`/product/${val.id}`} imgSrc={val.url} />
            ))}
          </Carousel>
        </WingBlank>

      {/* round buttons */}
      <div id="roundBtns">
        {this.state.roundBtns.map((val, index) => (
          <RoundBtn key={index} index={index} >{val.title}</RoundBtn>
        ))}
      </div>

      {/* list */}
      <div id="goodList">
          <List renderHeader={() => '商品列表'} className="my-list">
          {this.state.goods.map((val, index) => (
            <Item
              key={index}
              arrow="horizontal"
              thumb={val.image}
              multipleLine
              onClick={() => {
            this.props.history.push(`/product/${index}`)
              }}
            >
              {val.title}<Brief>{val.detail}</Brief>
            </Item>
          ))}
        </List>
      </div>

    {/* nav bar*/}
    <Navbar selectedTab="redTab" />
    </div>
    );
  }
}

export default Home;
