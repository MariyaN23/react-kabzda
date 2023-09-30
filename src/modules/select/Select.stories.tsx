import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React, {ChangeEvent, useState} from 'react';
import {Select} from './Select';

export default {
    title: 'Select stories',
    component: Select
}

let items = [
    {title: 'Valera', value: '1'},
    {title: 'Dimych', value: '2'},
    {title: 'Svetlana', value: '3'},
    {title: 'Igor', value: '4'}
]
export const WithValue =()=> {
    const [select, setSelect] = useState("1")
    const onChangeHandler =(id:any)=> {
       setSelect(id)
    }
    return (
            <Select value={select} onChange={onChangeHandler} items={items} />
    )
}

export const WithoutValue =()=> {
    const [select, setSelect] = useState(null)
    const onChangeHandler =(id:any)=> {
        setSelect(id)
    }
    return (
        <Select value={select} onChange={onChangeHandler} items={items} />
    )
}