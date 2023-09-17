import { action } from '@storybook/addon-actions';

import React, {useState} from 'react';
import {OnOff} from './OnOff';

export default {
    title: 'On Off stories',
    component: OnOff
}

const onClickHandler = action('On or Off clicked')

export const OnMode =()=> {
    return <OnOff on={true} onClickHandler={onClickHandler}/>
}

export const OffMode =()=> {
    return <OnOff on={false} onClickHandler={onClickHandler}/>
}

export const ModeChanging =()=> {
    const [on, setOn] = useState(false)

    return <OnOff on={on} onClickHandler={setOn}/>
}