import React from 'react'
import './styles.css'

type messageType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: messageType) {
    return (
        <div className="container">
            <img src={props.avatar} alt="Avatar"/>
            <span>{props.name}</span>
            <p>{props.message}</p>
            <span className="time-right">{props.time}</span>
        </div>
    )
}

export default Message

