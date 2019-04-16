import React,{Component} from 'react'
import { TabBar } from 'antd-mobile'
// 导入4个组件
// main  主页
// news  资讯
// chat  微聊
// mine  我的
import Main from '../main/main'
import Chat from '../chat/chat'
import News from '../news/news'
import Mine from '../mine/mine'
import './home.css'
import {tabBarData} from './tabBarData.json'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'main',
      hidden: false,
      fullScreen: false
    }
  }

  renderContent(pageText) {
    switch (this.state.selectedTab) {
        case 'main':
        return <Main/>
        break;
        case 'chat':
        return <Chat/>
        break;
        case 'news':
        return <News/>
        break;
        case 'mine':
        return <Mine/>
        break;

      default:
        break;
    }
  }

  render () {
    const tabBarTemplate = tabBarData.map((item,i) => {
      return(
      <TabBar.Item
            title={item.title}
            key={item.key}
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `${item.icon_bg_url}`}}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `${item.selet_bg_url}`}}
            />
            }
            selected={this.state.selectedTab === `${item.selectedpath}`}
            onPress={() => {
              this.setState({
                selectedTab:  `${item.selectedpath}`,
              });
            }}
          >
            {this.renderContent(`${item.title}`)}
          </TabBar.Item>
          )
    })
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', bottom: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {tabBarTemplate}
        </TabBar>
      </div>
    )
  }
}

export default Home

/***
 * <TabBar.Item
            title="Life"
            key="main"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'main'}
            onPress={() => {
              this.setState({
                selectedTab: 'main',
              });
            }}
          >
            {this.renderContent('main')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="Koubei"
            key="chat"
            selected={this.state.selectedTab === 'chat'}
            onPress={() => {
              this.setState({
                selectedTab: 'chat',
              });
            }}
          >
            {this.renderContent('chat')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="Friend"
            key="news"
            selected={this.state.selectedTab === 'news'}
            onPress={() => {
              this.setState({
                selectedTab: 'news',
              });
            }}
          >
            {this.renderContent('news')}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="My"
            key="mine"
            selected={this.state.selectedTab === 'mine'}
            onPress={() => {
              this.setState({
                selectedTab: 'mine',
              });
            }}
          >
            {this.renderContent('mine')}
          </TabBar.Item>
 */
