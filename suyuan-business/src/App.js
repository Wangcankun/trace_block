import React, { Component } from 'react';
// import logo from './logo.svg';
import suyuan from './pic/suyuan.png';
import chain from './pic/chain.png';
import company from './pic/company.png';
import list from './pic/list.png';
import about from './pic/about.png';

import { Grid } from 'antd-mobile';
import { Link } from 'react-router';
import 'antd-mobile/dist/antd-mobile.css';
import './App.css';

import nervos from './nervos'

import { simpleStoreContract } from './simpleStore';

const data = [
  { 'icon': chain, text: '产品上链', 'link': '/chain' },
  { 'icon': list, text: '我的产品', 'link': '/list' },
  { 'icon': company, text: '我的企业', 'link': '/company' },
  { 'icon': about, text: '关于', 'link': '/about' },
];

class App extends Component {
  state = {
    text: '',
    errorText: ''
  }

  async componentDidMount() {
    const count = await nervos.appchain.peerCount();
    console.log(count)
    // const from = nervos.eth.accounts.wallet[0] ? nervos.eth.accounts.wallet[0].address : ''
    // console.log(from)
    // simpleStoreContract.methods
    //   .getAmount(1)
    //   .call({
    //     from: from
    //   })
    //   .then(text => {
    //     console.log('text:', text)
    //     this.setState({ text: text })
    //   })
    //   .catch(error => {
    //     console.log('error:', error)
    //     this.setState({ errorText: error })
    //   })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={suyuan} className="App-logo" alt="logo" />
          <h1 className="App-title">高价值商品溯源平台</h1>
          <p>M303小分队</p>
        </header>
        <Grid data={data} columnNum={2} 
          renderItem={dataItem => (
              <Link to={dataItem.link}>
                <div style={{ padding: '50px' }}>
                  <img src={dataItem.icon} style={{ width: '40px', height: '40px' }} alt="" />
                  <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                    <span>{dataItem.text}</span>
                  </div>
                </div>
              </Link>
          )}
        />

      </div>
    );
  }
}

export default App;