import {useEffect, useState} from 'react';

export default {
    title: 'Clock'
}

export const Clock = () => {
    const [time, setTime] = useState('00:00:00')
    useEffect(()=>{
        setInterval(()=>{
            setTime( `${new Date().getHours()>9 ? new Date().getHours():`0${new Date().getHours()}`}:${new Date().getMinutes()>9 ? new Date().getMinutes() : `0${new Date().getMinutes()}`}:${new Date().getSeconds()>9 ? new Date().getSeconds() : `0${new Date().getSeconds()}`}`)
        }, 1000)
    })
    return <div>{time}</div>
}