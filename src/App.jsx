import React,{Component} from 'react'

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
    fetch(URL).then((response)=>{
      if(response.ok){
        return response.json()
      }else{
        /*return new Promise((resolve,reject)=>{
          reject('网络不稳定，稍后重试')
        })*/
        return Promise.reject('网络不稳定，稍后重试')
      }
    })
      .then((data)=>{
        console.log('成功了')
        console.log(data)
        let {items} = data
        this.setState({
          repoName:items[0].name,//仓库名
          repoUrl:items[0].html_url,//仓库地址
          loading:false,//标识是否正在加载
          errorMsg:''//错误信息
        })
      }).catch((err)=>{
        console.log('失败了')
        console.log(err.toString())
        this.setState({
          repoName:'',//仓库名
          repoUrl:'',//仓库地址
          loading:false,//标识是否正在加载
          errorMsg:err.toString()//错误信息
        })

      })
    
    
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