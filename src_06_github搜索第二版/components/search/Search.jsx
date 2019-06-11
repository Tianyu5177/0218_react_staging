import React, {Component} from 'react'

export default class Search extends Component {

  search =()=>{
    //从App获取更新关键词的方法
    let {setKeyWord} = this.props
    //1.获取用户输入
    let keyWord = this.refs.keyWord.value.trim()
    //2.给List传递搜索的关键词
    setKeyWord(keyWord)
    //3.清空用户输入
    this.refs.keyWord.value = ''
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