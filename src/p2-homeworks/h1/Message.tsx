import React from 'react'
import  s from './message.module.css'

type messageType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: messageType) {
    return (
        <div className={s.container}>
            <img src={props.avatar} alt="Avatar" className={s.avatar}/>

            <div className={s.name}>{props.name}</div>
            <div className={s.message}>{props.message}</div>
            <div className={s.time}>{props.time}</div>
        </div>
    )
}

export default Message

