import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
  render() {
    // if(this.state.isLoggedIn){return(<div>Welcome bawa</div> )} //1st approach
    // else{return (<div>Welcome guest</div>)}

    // let message
    // if(this.state.isLoggedIn){message = <div>Hello Ajay</div>} //2nd approach
    // else{message = <div>Hello Guest</div>}
    // return <div>{message}</div>

//    return this.state.isLoggedIn ?       //3rd Approach Ternary operator approach
//     <div>Hello Ajay</div>:
//     <div>Hello Guest</div>

return this.state.isLoggedIn && <div>Welcome Ajay</div>
   }
}

export default UserGreeting