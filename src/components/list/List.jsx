import React, {Component} from 'react'
import Item from '../item/Item'

export default class List extends Component {

  /*state = {
    isFirstView:true,
    users:[],
    loading:false,
    errorMsg:''
  }*/

  render() {
    let {isFirstView,users,loading,errorMsg} = this.props.appState
    if(isFirstView){
      return <h2>请在上方输入用户名，随后点击搜索</h2>
    }else if(loading){
      return <h2>loading....</h2>
    }else if(errorMsg){
      return <h2>{errorMsg}</h2>
    }else{
      return (
        <div className="row">
          {users.map((user,index)=>{
            return <Item key={user.login} user={user}/>
          })}
        </div>
      )
    }
  }
}