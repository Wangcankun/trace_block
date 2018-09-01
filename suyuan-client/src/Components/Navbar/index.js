import React from 'react'
import { TabBar } from 'antd-mobile';



const Navbar = ({selectedTab}) => (
<div className="bottomTabBar">
  <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="My"
            key="my"
            selected={true}
            onPress={() => {
            }}
          >
          </TabBar.Item>
</div>
)

export default Navbar
