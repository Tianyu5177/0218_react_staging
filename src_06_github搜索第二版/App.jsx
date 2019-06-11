import React,{Component} from 'react'
import Search from './components/search/Search'
import List from './components/list/List'

export default class App extends Component{

  //维护search组件传递过来的搜索关键词
  state = {
    keyWord:'' //当前keyWord是供List组件使用的
  }

  //更新关键词方法
  setKeyWord = (keyWord)=>{
    this.setState({keyWord})
  }

  render(){
    return (
      <div className="container">
        <Search setKeyWord={this.setKeyWord}/>
        <List keyWord={this.state.keyWord}/>
      </div>
    )
  }
}
