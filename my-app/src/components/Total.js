import React from 'react'

const Total = ({parts}) =>{
    const total = parts.reduce((s,p)=>{
        console.log('Valor de s y p: ',s,p)
        return s + p.exercises
    },0)
    return(
        <div>
            <p>
            <strong>total of {total} exercises</strong>
            </p>
        </div>
    )
}

export default Total
