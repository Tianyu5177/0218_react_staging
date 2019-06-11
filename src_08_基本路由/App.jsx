import React,{Component} from 'react'
import {NavLink,Route,Redirect,Switch} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

export default class App extends Component{
  render(){
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
              <input type="text"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/*路由跳转*/}
              <NavLink className="list-group-item" activeClassName="demo" to="/about">About</NavLink>
              <NavLink className="list-group-item" activeClassName="demo" to="/home">Home</NavLink>

              {/*如下代码是普通传统按标签跳转，页面刷新，需要有多个页面配合*/}
              {/*<a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a>*/}

            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/*注册路由*/}
                <Switch>
                  <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/>
                  <Redirect to="/about"/>
                </Switch>

                {/*要展示的不同内容*/}
                {/*<h3>我是About的内容</h3>
                <h3>我是Home的内容</h3>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
