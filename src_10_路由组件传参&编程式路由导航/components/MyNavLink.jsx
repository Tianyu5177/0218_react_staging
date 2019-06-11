import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    let props = this.props
    return (
      <NavLink {...props} className="list-group-item" activeClassName="demo"></NavLink>
    )
  }
}
