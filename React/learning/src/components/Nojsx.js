import React from 'react'

const Nojsx = ()=>{
    return React.createElement(
        'div',
        {id:'hello',className:'hey friend'}, //takes key value pair either pass it null or give it a pair to co relate wuth the class
        React.createElement('h1',null,'Hello no jsx')
        ) 
}
export default Nojsx