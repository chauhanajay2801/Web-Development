import React from 'react'

function MemoComp({name}) {
console.log("Rendering memo")
    return (
    <div>
        {name}
    </div>
  )
}

export default React.memo(MemoComp)