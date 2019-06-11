import React, {Component} from 'react'
import axios from 'axios'
import Item from '../item/Item'

export default class List extends Component {

  state = {
    isFirstView:true,
    users:[],
    loading:false,
    errorMsg:''
  }

  //每次接收到新的参数时，重新发送请求
  async componentWillReceiveProps({keyWord}){
    //发请求之前，更新状态为loading
    this.setState({
      isFirstView:false,
      users:[],
      loading:true,
      errorMsg:''
    })
    const URl = `https://api.github.com/search/users?q=${keyWord}`
    try{
      //使用axios发送请求
      let response = await axios.get(URl)
      //从请求数据中获取指定的数据
      let users = response.data.items.map((item)=>{
          return {
            userAvataUrl:item.avatar_url,
            userRepoUrl:item.html_url,
            userName:item.login,
          }
      })
      //若请求成功，维护数据到状态中
      this.setState({
        isFirstView:false,
        users,
        loading:false,
        errorMsg:''
      })
    }
    catch(err){
      //若请求失败，维护错误到状态中
      this.setState({
        isFirstView:false,
        users:[],
        loading:false,
        errorMsg:err.message
      })
    }
    /*axios.get(URl)
      .then((response)=>{
        console.log(response)
        this.setState({
          isFirstView:false,
          users:response.data.items,
          loading:false,
          errorMsg:''
        })
      })
      .catch((err)=>{
        console.log(err)
        this.setState({
          isFirstView:false,
          users:[],
          loading:false,
          errorMsg:err.message
        })
      })*/
  }

  render() {
    //如下代码为条件渲染
    let {isFirstView,users,loading,errorMsg} = this.state
    if(isFirstView){
      return <h2>请在上方输入用户名，随后点击搜索</h2>
    }else if(loading){
      return <h2>loading....</h2>
    }else if(errorMsg){
      return <h2>{errorMsg}</h2>
    }else{
      return (
        <div className="row">
          {users.map((user)=>{
            return <Item key={user.userName} user={user}/>
          })}
        </div>
      )
    }
  }
}