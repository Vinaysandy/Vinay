// import React from 'react'

// const Nav = (props) => {
//   return (
//     <h1>{props.id}</h1>
//   )
// }

// export default Nav

import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      (<h1>{(this.props.data)}</h1>)
    )
  }
}
