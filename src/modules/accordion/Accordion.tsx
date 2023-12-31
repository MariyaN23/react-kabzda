import React from "react";

type ItemsType = {
    value: any
    title: string
}

type  AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: ()=>void
    items: ItemsType[]
    onClick: (value: any)=> void
}



const SecretAccordion = (props:AccordionPropsType)=> {
    console.log('accordion rendering')
       return (
        <div>
            <AccordionTitle setAccordionCollapsed={props.setAccordionCollapsed} title={props.titleValue}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
       )
}

export const Accordion = React.memo(SecretAccordion)

type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed: ()=> void
}

function SecretAccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <div>
            <h1 onClick={(event)=>{props.setAccordionCollapsed()}}>{props.title}</h1>
        </div>
    )
}

const AccordionTitle = React.memo(SecretAccordionTitle)

type AccordionBodyPropsType = {
    items: ItemsType[]
    onClick: (value: any)=> void
}

function SecretAccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
            {/*<li>1</li>
            <li>2</li>
            <li>3</li>*/}
        </ul>
    )
}

const AccordionBody = React.memo(SecretAccordionBody)