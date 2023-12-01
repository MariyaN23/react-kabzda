import React from 'react';
import {ClockViewPropsType} from './Clock';

const get2DigitString = (num: number) => num < 10 ? '0' + num : num  //добавляет 0 если меньше 10 значение

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (
        <><span>{get2DigitString(new Date().getHours())}</span>
            :
            <span>{get2DigitString(new Date().getMinutes())}</span>
            :
            <span>{get2DigitString(new Date().getSeconds())}</span>
        </>
    )
}