import React, {Component} from 'react'

export default class HomeMessage extends Component {

  state = {
    messages:[]
  }

  componentDidMount(){
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

  render() {
    let {messages} = this.state
    return (
      <div>
        <ul>
          {
            messages.map((item)=>{
              return (
                <li key={item.id}>
                  <a href="/home/message/1">{item.content}</a>
                </li>
              )
            })
          }
        </ul>
        <hr/>
      </div>
    )
  }
}