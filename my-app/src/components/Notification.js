/* 
Notification component 
Version 0.1-alpha

Updates:

*/ 
import React from 'react'
const Notification = ({ message }) => {
    if (message === null) {
    return null
    }

    return (
    <div className="error">
        {message}
    </div>
    )
}

export default Notification