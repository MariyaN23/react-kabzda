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

export const CollapsedAccordion =()=> {
    return <Accordion titleValue={"Collapsed Accordion"}
                      collapsed={true}
                      setAccordionCollapsed={onChangeHandler}/>
}

export const OpenedAccordion =()=> {
    return <Accordion titleValue={"Opened Accordion"}
                      collapsed={false}
                      setAccordionCollapsed={()=>{}}/>
}

export const AccordionDemo =()=> {

    const [collapsed, setCollapsed] = useState(false)

    return <Accordion titleValue={"Opened Accordion"}
                      collapsed={collapsed}
                      setAccordionCollapsed={()=>{setCollapsed(!collapsed)}}/>
}