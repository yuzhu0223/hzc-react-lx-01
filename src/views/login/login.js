import React,{Component} from 'react'
import 'antd-mobile/dist/antd-mobile.css'
import './login.css'
import {Flex, NavBar, List, InputItem,  Button,  WingBlank, WhiteSpace, Toast } from 'antd-mobile'
import axios from '../../http'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
        uname: '',
        pwd: ''
    }
  }
  changeValue = (key,val) => {
    // console.log(key,val)
    // console.log(key, val) // key->uname | pwd
    // ES6 -> 对象的新语法 -> 对象key可以is变量
    this.setState ({
        [key]: val
    })
  }
  handleLogin = async() => {
    const { history } = this.props
    const body = this.state
    const {data,meta} = await axios.post('users/login', body)

    if (meta.status === 200) {
      window.localStorage.setItem('token',data.token)
      window.localStorage.setItem('uid',data.uid)
      history.push('/')
    } else {
      Toast.fail(meta.msg, 1)
    }
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
            <InputItem value={this.state.uname} onChange={(v) => {
              this.changeValue('uname',v)
            }}>姓名</InputItem>
            <InputItem value={this.state.pwd} onChange={(v) => {
              this.changeValue('pwd',v)
            }}>密码</InputItem>
          </List>
          <WhiteSpace />
          <Button onClick={this.handleLogin} type="primary">登录</Button><WhiteSpace />
        </Flex.Item>
      </Flex>
      </WingBlank>
    </div>
    )
  }
}

export default Login
