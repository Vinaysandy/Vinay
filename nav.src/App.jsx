// import React from 'react'
// import Nav from './Nav';
// import "./arpi.css"

// const App = () => {
//   return (
//     <>
//     <Nav id="Arpita AK"/>
//     </>
//   )
// }

// export default App

import React, { Component } from 'react'
import Nav from './Nav';

export default class App extends Component {
  render() {
    return (
      <Nav data="Arpita AK"/>
    )
  }
}
