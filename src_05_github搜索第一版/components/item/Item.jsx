import React, {Component} from 'react'
import './Item.css'

export default class Item extends Component {
  render() {
    let {user} = this.props
    return (
      <div className="card">
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          <img src={user.avatar_url} alt={user.login} style={{width:'100px'}}/>
        </a>
        <p className="card-text">{user.login}</p>
      </div>
    )
  }
}