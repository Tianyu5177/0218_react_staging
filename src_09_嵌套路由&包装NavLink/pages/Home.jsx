import React, {Component} from 'react'
import {NavLink,Route,Redirect,Switch} from 'react-router-dom'
import HomeNews from './HomeNews'
import HomeMessage from './HomeMessage'
import MyNavLink from '../components/MyNavLink'


export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            {/*路由跳转*/}
            <li><MyNavLink to="/home/news" >News</MyNavLink></li>
            <li><MyNavLink to="/home/message">Message</MyNavLink></li>
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