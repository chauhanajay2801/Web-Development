import React, { Component } from 'react'

class LifeB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Ajay Chauhan'
      }
    console.log("LifecycleB a constuctor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifecycleB a get drived state from props")
        return null
    }
    
    componentDidMount(){
        console.log("LifecycleB Component did mount")
    }

    shouldComponentUpdate(){
      console.log("LifecycleB should component update")
      return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log("LifecycleB getSnapshotBeforeUpdate")
      return null
    }

    componentDidUpdate(){
      console.log("LifecycleB component did update")
    }

  render() {
      console.log("LifecycleB Render method")
    return (
      <div>LifeB</div>
    )
  }
}

export default LifeB