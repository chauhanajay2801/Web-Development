import React, { Component } from 'react'

class RefsDemo extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef() //1st method
    this.cbRef = null // cb= callback
    this.setCbRef = element =>{ //accept dom  element as a parameter and assign it to the callback ref
      this.cbRef =  element
    }
  }

  componentDidMount() { 
    // this.inputRef.current.focus()
    if(this.cbRef){
      this.cbRef.focus()
    }
   }

   clickHandler = () =>{
    alert(this.inputRef.current.value)
   }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo