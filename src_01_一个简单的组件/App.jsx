import React,{Component} from 'react'
import './App.css'
import logo from './logo.svg'

export default class App extends Component{
  render(){
    return (
      <div>
        <h2 className="text">hello，0218</h2>
        <img src={logo} className="picture" alt=""/>
        <a href="http://www.baidu.com">sdfghjk</a>
      </div>
    )
  }
}