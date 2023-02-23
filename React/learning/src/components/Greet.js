import React, {Component} from 'react'

class Greet extends Component{
    render(){
        const {name,hero} = this.props
        //const {state1, state2} = this.state
        return <h1>hey {name} and you plays {hero} </h1>
    }
}

export default Greet