import React,{Component} from 'react'
import Search from './components/search/Search'
import List from './components/list/List'

export default class App extends Component{

  state = {
    isFirstView:true,
    users:[],
    loading:false,
    errorMsg:''
  }

  updateAppState = ({isFirstView,users,loading,errorMsg})=>{
    this.setState({
      isFirstView,
      users,
      loading,
      errorMsg,
    })

  }

  render(){
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List appState={this.state}/>
      </div>
    )
  }
}
