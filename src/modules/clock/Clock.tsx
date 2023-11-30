import React from 'react';
import {useEffect, useState} from 'react';

type PropsType = {}

const get2DigitString = (num: number) => num < 10 ? '0' + num : num

export const Clock: React.FC<PropsType>= () => {
    const [date, setDate] = useState(new Date())
    useEffect(()=> {
        const intervalID = setInterval(()=> {
            setDate(new Date())
            return ()=> {
                clearInterval(intervalID)
            }
        }, 1000)
    }, [])

    return <div>
        <span>{get2DigitString(new Date().getHours())}</span>
        :
        <span>{get2DigitString(new Date().getMinutes())}</span>
        :
        <span>{get2DigitString(new Date().getSeconds())}</span>
    </div>
}