import React,{Component} from 'react'
import 'antd-mobile/dist/antd-mobile.css'
import './login.css'
import {Flex, NavBar, List, InputItem,  Button,  WingBlank,WhiteSpace } from 'antd-mobile'

class Login extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return(
    <div>
      <WingBlank size="sm">
      <Flex direction="column">
        <Flex.Item>
        <NavBar>登录页面</NavBar>
        </Flex.Item>
        <WhiteSpace/>
        <Flex.Item>
          <List>
            <InputItem>姓名</InputItem>
            <InputItem>密码</InputItem>
          </List>
          <WhiteSpace />
          <Button type="primary">登录</Button><WhiteSpace />
        </Flex.Item>
      </Flex>
      </WingBlank>
    </div>
    )
  }
}

export default Login
