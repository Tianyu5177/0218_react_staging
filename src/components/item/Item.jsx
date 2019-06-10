import React, {Component} from 'react'
import './Item.css'

export default class Item extends Component {
  render() {
    let {user} = this.props
    return (
      <div className="card">
        <a href={user.userRepoUrl} target="_blank" rel="noopener noreferrer">
          <img src={user.userAvataUrl} alt={user.userName} style={{width:'100px'}}/>
        </a>
        <p className="card-text">{user.userName}</p>
      </div>
    )
  }
}