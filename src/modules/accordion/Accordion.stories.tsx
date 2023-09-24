import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import React, {useState} from 'react';

export default {
    title: 'Accordion stories',
    component: Accordion
}

//Новый синтаксис:
/*const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>

export const FirstStory: Story = {
    args: {
        titleValue: "Hello",
        collapsed: true
    }
}*/

//Старый:

const onChangeHandler = action('onChange')

let items = [
    {title: 'Valera', value: '1'},
    {title: 'Dimych', value: '2'},
    {title: 'Svetlana', value: '3'},
    {title: 'Igor', value: '4'}
]

const onClickCallBack = action('Some item was clicked')

export const CollapsedAccordion =()=> {
    return <Accordion titleValue={"Collapsed Accordion"}
                      collapsed={true}
                      setAccordionCollapsed={onChangeHandler}
                      items={items}
                      onClick={onClickCallBack}
    />
}

export const OpenedAccordion =()=> {
    return <Accordion titleValue={"Opened Accordion"}
                      collapsed={false}
                      setAccordionCollapsed={()=>{}}
                      items={items}
                      onClick={onClickCallBack}/>
}

export const AccordionDemo =()=> {

    const [collapsed, setCollapsed] = useState(false)

    return <Accordion titleValue={"Opened Accordion"}
                      collapsed={collapsed}
                      setAccordionCollapsed={()=>{setCollapsed(!collapsed)}}
                      items={items}
                      onClick={(id)=> {alert(`User with id ${id} should be happy`)}}/>
}