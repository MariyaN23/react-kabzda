import React from "react";

type  AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: ()=>void
}

function Accordion(props:AccordionPropsType) {
    console.log('accordion rendering')
       return (
        <div>
            <AccordionTitle setAccordionCollapsed={props.setAccordionCollapsed} title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
       )
}

type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed: ()=> void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <div>
            <h1 onClick={props.setAccordionCollapsed}>{props.title}</h1>
        </div>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;