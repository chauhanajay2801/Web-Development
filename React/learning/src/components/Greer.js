import React from 'react'

// function Greer(){
//     return <h1>Hello bro this is the first component</h1>
// }

// const Greer = ({name,hero}) => <div> This is called destructuring as a parameter
const Greer = props => {
const{name,hero} = props
    return(
<div>
    hey the name is {name} and the character played is {hero}
</div>
)
}
export default Greer

// if we dont use export default and istead we use the export const greer we need to import by its same name as it is given but with this approach we can use any other approac
//  and this is called the named exxports