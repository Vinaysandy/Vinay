import React, { Component } from 'react'
import Course from './Course';
import JSON from "./user.json"

export default class App extends Component {
    constructor(){
        super()
        this.state={JSON}
    }
  render() {
    return (
      <div><Course date = {this.state.JSON}/></div>
    )
  }
}
