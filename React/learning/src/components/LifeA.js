import React, { Component } from 'react'
import LifeB from './LifeB'

class LifeA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Ajay Chauhan'
      }
    console.log("LifecycleA constuctor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA get drived state from props")
        return null
    }
    
    componentDidMount(){
        console.log("LifecycleA Component did mount")
    }

  render() {
      console.log("LifecycleA Render method")
    return (
        <div>
            <div>LifeA</div>
            <LifeB/>
        </div>
      
    )
  }
}

export default LifeA