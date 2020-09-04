/* 
Notification component 
Version 0.1-alpha

Updates:

*/ 
import React from 'react'
const NotificationPerson = ({ message }) => {
    if (message === null) {
    return null
    }

    return (
    <div className="notification">
        {message}
    </div>
    )
}

export default NotificationPerson