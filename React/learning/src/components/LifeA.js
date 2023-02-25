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

    shouldComponentUpdate(){
      console.log("LifecycleA should component update")
      return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log("LifecycleA getSnapshotBeforeUpdate")
      return null
    }

    componentDidUpdate(){
      console.log("LifecycleA component did update")
    }

changeState = () =>{
  this.setState({
    name:"Ajay "
  })
}

  render() {
      console.log("LifecycleA Render method")
    return (
        <div>
            <div>LifeA</div>
            <button onClick={this.changeState}>ChangeState</button>
            <LifeB/>
        </div>
      
    )
  }
}

export default LifeA