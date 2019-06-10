import React,{Component} from 'react'
import axios from 'axios'

export default class App extends Component{

  state =  {
    repoName:'',//仓库名
    repoUrl:'',//仓库地址
    loading:true,//标识是否正在加载
    errorMsg:''//错误信息
  }

  async componentDidMount(){
    console.log('组件已经挂载到页面上了！开始发送请求')

    //发送请求
    const URL = `https://api.github.com/search/repositories?q=r&sort=stars`
    try{
      let response =  await axios.get(URL)
      let data = response.data.items[0]
      this.setState({
        repoName:data.name,//仓库名
        repoUrl:data.html_url,//仓库地址
        loading:false,//标识是否正在加载
        errorMsg:''//错误信息
      })
    }
    catch(err){
      this.setState({
        repoName:'',//仓库名
        repoUrl:'',//仓库地址
        loading:false,//标识是否正在加载
        errorMsg:err.message//错误信息
      })
    }
    /*axios.get(URL)
      .then((response)=>{
        console.log(response.data.items[0])
        let data = response.data.items[0]
        this.setState({
          repoName:data.name,//仓库名
          repoUrl:data.html_url,//仓库地址
          loading:false,//标识是否正在加载
          errorMsg:''//错误信息
        })
      })
      .catch((err)=>{
        console.log(err.message)
        this.setState({
          repoName:'',//仓库名
          repoUrl:'',//仓库地址
          loading:false,//标识是否正在加载
          errorMsg:err.message//错误信息
        })
      })*/

  }

  render(){
    let {repoName,repoUrl,loading,errorMsg} = this.state
    if(loading){
      return <h2>loading...</h2>
    }else if(repoName && repoUrl){
      return <h2>github上点赞最多的仓库是：<a href={repoUrl}>{repoName}</a></h2>
    }else if(errorMsg){
      return <h2 style={{color:'red'}}>{errorMsg}</h2>
    }
  }
}