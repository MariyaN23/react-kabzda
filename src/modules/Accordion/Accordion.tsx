import React from "react";

type  AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}
function Accordion(props:AccordionPropsType) {
    console.log('Accordion rendering')
   if (props.collapsed == false) {
       return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
       )
   } else {
       return (
           <div>
               <AccordionTitle title={props.titleValue}/>
           </div>
       )
   }

}
type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <div>
            <h1>{props.title}</h1>
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