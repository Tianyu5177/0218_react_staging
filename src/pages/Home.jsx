import React, {Component} from 'react'
import {NavLink,Route,Redirect,Switch} from 'react-router-dom'
import HomeNews from './HomeNews'
import HomeMessage from './HomeMessage'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            {/*路由跳转*/}
            <li><NavLink className="list-group-item" activeClassName="demo" to="/home/news" >News</NavLink></li>
            <li><NavLink className="list-group-item" activeClassName="demo" to="/home/message">Message</NavLink></li>
          </ul>
          {/*注册路由*/}
          <Switch>
            <Route path="/home/news" component={HomeNews}/>
            <Route path="/home/message" component={HomeMessage}/>
            <Redirect to="/home/news"/>
          </Switch>
        </div>
      </div>
    )
  }
}