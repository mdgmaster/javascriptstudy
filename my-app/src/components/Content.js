import React from 'react'
import Part from './Part'

const Content = ({parts}) => {
    console.log("objeto:",parts)
    return(
        <div>
            {parts.map(c => <Part title={c.name} ex = {c.exercises}/>)}
        </div>
    )
}

export default Content