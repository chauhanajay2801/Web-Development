import React, { Component } from 'react'

class ClassClick extends Component {

clickKandler(){
    console.log("Class click done")
}

  render() {
    return (
      <div>
        <div>ClassClick</div> 
        <button onClick={this.clickKandler}>class click</button>

      </div>
    )
  }
}

export default ClassClick
