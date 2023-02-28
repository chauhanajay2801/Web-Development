import React, { Component } from 'react'

 class RegularComp extends Component {
  render() {
    console.log("Regular component")
    return (
      <div>
        RegularComponent{this.props.name}
      </div>
    )
  }
}

export default RegularComp