import React, {Component} from 'react'
import {Link,Route} from 'react-router-dom'
import HomeMessageDetail from './HomeMessageDetail'

export default class HomeMessage extends Component {

  state = {
    messages:[]
  }

  componentDidMount(){
    //console.log('HomeMessage-----componentDidMount')
    setTimeout(()=>{
      this.setState({
        messages:[
          {id:1,content:'消息1'},
          {id:2,content:'消息2'},
          {id:3,content:'消息3'},
          {id:4,content:'消息4'},
        ]
      })
    },1000)
  }

  pushShow =(path)=>{
    this.props.history.push(path)
  }

  replaceShow =(path)=>{
    this.props.history.replace(path)
  }

  back =()=>{
    this.props.history.goBack()
  }

  render() {
    let {messages} = this.state
    return (
      <div>
        <br/>
        <ul>
          {
            messages.map((item)=>{
              return (
                <li key={item.id}>
                  {/*路由跳转*/}
                  <Link to={`/home/message/message_detail/${item.id}`}>{item.content}</Link>
                  ------<button onClick={()=>this.pushShow(`/home/message/message_detail/${item.id}`)}>点我push查看</button>
                  ------<button onClick={()=>this.replaceShow(`/home/message/message_detail/${item.id}`)}>点我replace查看</button>
                </li>
              )
            })
          }
        </ul>
        <hr/>
        <button onClick={this.back}>后退</button>
        {/*注册路由*/}
        <Route path="/home/message/message_detail/:id" component={HomeMessageDetail}/>
      </div>
    )
  }
}