import React, { Component } from 'react'
import "./java.css"

export default class App extends Component {
    constructor(){
        super()
        this.state = {count : 0}
    }
    handleAdd = ()=>{
        this.setState ({count : this.state.count +1})
    }
    handleSub = ()=>{
        this.setState ({count : this.state.count -1})
    }
    handleReset = ()=>{
        this.setState ({count : 0})
    }
  render() {
    return (
        <center>
      <div className='main'>
        <h1 className='h1'>{this.state.count}</h1>
        <button onClick={this.handleAdd} className="B1">Add</button>
        <button onClick={this.handleSub} className="B2">Subtraction</button>
        <button onClick={this.handleReset} className="B3">Reset</button>
      </div>
      </center>
    )
  }
}

