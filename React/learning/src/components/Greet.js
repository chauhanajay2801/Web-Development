import React, {Component} from 'react'

class Greet extends Component{
    render(props){
        return <h1>hey {this.props.name} and you plays {this.props.heroname} </h1>
    }
}

export default Greet