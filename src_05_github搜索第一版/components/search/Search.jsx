import React, {Component} from 'react'
import axios from 'axios'

export default class Search extends Component {

  search =()=>{
    //获取到更新App状态的方法
    let {updateAppState} = this.props
    //1.获取用户输入
    let keyWord = this.refs.keyWord.value
    //2.发送请求
    updateAppState({
      isFirstView:false,
      users:[],
      loading:true,
      errorMsg:''
    })
    const URl = `https://api.github.com/search/users?q=${keyWord}`
    axios.get(URl)
      .then((response)=>{
        console.log(response)
        updateAppState({
          isFirstView:false,
          users:response.data.items,
          loading:false,
          errorMsg:''
        })
      })
      .catch((err)=>{
        console.log(err)
        updateAppState({
          isFirstView:false,
          users:[],
          loading:false,
          errorMsg:err.message
        })
      })

  }


  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref="keyWord"/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}