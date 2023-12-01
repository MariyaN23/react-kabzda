import React from 'react';
import {useEffect, useState} from 'react';
import {AnalogClockView} from './AnalogClockView';
import {DigitalClockView} from './DigitalClockView';

type ClockPropsType = {
    mode?: 'digital' | 'analog'
}

export type ClockViewPropsType = {
    date: Date
}

export const Clock: React.FC<ClockPropsType> = (props: ClockPropsType) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
            return () => {
                clearInterval(intervalID)
            }
        }, 1000)
    }, [])

    let view

    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return <div>
        {view}
    </div>
}