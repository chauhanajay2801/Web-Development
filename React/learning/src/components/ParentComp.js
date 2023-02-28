import React, { Component ,PureComponent} from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'

class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Ajay Chauhan"
      }
    }

componentDidMount() { 
    setInterval(() => this.setState({name:"Ajay"}), 2000)
 }

  render() {
    console.log("------------------------------------------------Parent component------------------------")
    return (
      <div>
        ParentComponent
        <RegularComp name = {this.state.name}/>
        <PureComp name = {this.state.name}/>
      </div>
      
    )
  }
}

export default ParentComp