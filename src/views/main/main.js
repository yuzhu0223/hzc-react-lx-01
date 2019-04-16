import React, {Component} from 'react'
import { SearchBar, Carousel, Grid, NoticeBar } from 'antd-mobile'
import axios from '../../http'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      swiperData: [],
      imgHeight: 176,
      menuData: [],
      data: Array.from(new Array(9)).map((_val, i) => ({
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: `name${i}`,
      })),
      infoData: []
    }
  }
  //封装axios请求(本页需要发送很多请求)
   getMainData = async (path) => {
    const {data,meta:{msg,status}} = await axios.post(path)
    if(status === 200) {
      return data.list
    }
  }
  async componentDidMount() {
    const swiperData = this.getMainData('homes/swipe')
    const menuData = this.getMainData('homes/menu')
    const infoData = this.getMainData('homes/info')
    // 目的: 统一处理所有getMainData方法的结果Promise对象
    const mainDataList = await Promise.all([swiperData, menuData, infoData])
    // console.log(mainDataList[1])
    this.setState({
      swiperData: mainDataList[0],
      menuData: mainDataList[1],
      infoData: mainDataList[2]
    },() => {
      // 把menuData的数据->赋值->data->
        // 把menuData改造成data
        // 遍历+返回数组 return
        // console.log(this.state.menuData)
        const data = this.state.menuData.map((item,i) => {
          return {
            id:item.id,
            // 因为icon后端返回的数据没有，所以从myapi的public文件夹中模拟发送请求icon数据
            icon: `http://127.0.0.1:8086/public/0${i+1}.png`,
            text:item.menu_name
          }
        })
        this.setState({
          data
        })
    })
  }

  render () {
    // 轮播图模板
    const swiperTemplate = this.state.swiperData.map((val,i) => (
      <a
        key={i}
        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
      >
        <img
          src={val.original}
          alt=""
          style={{ width: '100%', verticalAlign: 'top' }}
          onLoad={() => {
            // fire window resize event to change height
            window.dispatchEvent(new Event('resize'))
            this.setState({ imgHeight: 'auto' })
          }}
        />
      </a>
    ))

    // info通告栏模板
    const infoTemplate = this.state.infoData.map((item,i) => {
      return <NoticeBar
      key={i}
      mode="link" action={<span>去看看</span>}
      marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
      {item.info_title}
    </NoticeBar>
    })
    return (
      <div>
        {/* 搜索 */}
        <SearchBar placeholder="请输入搜索关键字" ref={ref => this.autoFocusInst = ref} />

        {/* 轮播 */}
        <Carousel
          autoplay={false}
          infinite>
          {swiperTemplate}
        </Carousel>

        {/* 菜单 8宫格 */}
        <Grid data={this.state.data} activeStyle={false} />

        {/* info通告栏 */}
        {infoTemplate}
        {/* 好客问答 */}

        {/* 房屋信息->3组 */}
      </div>
    )
  }
}
export default Main
