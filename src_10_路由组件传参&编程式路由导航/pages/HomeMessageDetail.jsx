import React, {Component} from 'react'

const messageDetails = [
  {id: 1, title: 'Message001', content: '我爱你, 中国'},
  {id: 3, title: 'Message003', content: '我爱你, 老婆'},
  {id: 6, title: 'Message006', content: '我爱你, 孩子'},
]

export default class HomeMessageDetail extends Component {

  state = {
    messageDetails : [
      {id: 1, title: 'Message001', content: '我爱你, 中国'},
      {id: 2, title: 'Message003', content: '我爱你, 老婆'},
      {id: 3, title: 'Message006', content: '我爱你, 孩子'},
      {id: 4, title: 'Message006', content: '我爱你, 0218'},
    ]
  }

  render() {
    let {messageDetails} = this.state
    let {id} = this.props.match.params
    let data = messageDetails.find(item => item.id === id*1)

    console.log(id)
    return (
      <ul>
        <li>ID:{data.id}</li>
        <li>TITLe:{data.title}</li>
        <li>CONTENT:{data.content}</li>
      </ul>
    )
  }
}