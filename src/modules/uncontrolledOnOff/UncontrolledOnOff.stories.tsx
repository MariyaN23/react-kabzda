import React from 'react';
import {UncontrolledOnOff} from './UncontrolledOnOff';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Uncontrolled OnOff stories',
    component: UncontrolledOnOff
}

const onClickHandler = action('On or Off clicked')

export const OnMode =()=> {
    return <UncontrolledOnOff defaultValue={true} onChange={onClickHandler}/>
}

export const OffMode =()=> {
    return <UncontrolledOnOff defaultValue={false} onChange={onClickHandler}/>
}