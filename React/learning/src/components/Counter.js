import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }

  increment() {
//   this.setState({
//         count: this.state.count + 1
//     },
//     () => {
//         console.log("Callback value", this.state.count)
//     }
//     )
this.setState(prevState=>({  //to count from the previous state not from the corrent state that will give the correct result
    count:prevState.count+1  //we must use function as an argument instead of the ocject because it has the access to the previous state 
}))  
console.log(this.state.count) // console is called when the state  is not updated that is why there is the difference between the console value and the page value, for that we can use the callback value  using arrow method as done above 
   }

   incrementFive(){     //it will be updated only once because react group multiple uodate calls into single one to improve               performance so even if we call 5 times t runs only once
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
   }

    render() {
    return (
      <div>
        <div> Counter - {this.state.count}</div>
        <button onClick={()=>this.incrementFive()}>update count</button>
        </div>
    )
  }
}

export default Counter