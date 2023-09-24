import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./modules/accordion/Accordion";
import {Rating, RatingValueType} from './modules/Rating/Rating';
import {OnOff} from './modules/onOff/OnOff';
import UncontrolledAccordion from './modules/uncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './modules/UncontrolledRating/UncontrolledRating';
import {UncontrolledOnOff} from './modules/uncontrolledOnOff/UncontrolledOnOff';

function App() {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [on, setOn] = useState(false)
    const onClickHandler = (on: boolean) => {
        setOn(on)
    }

    let [switchOn, setSwitchOn] = useState(false)

    let items = ['1', '2', '3']

    return (
        <div className={'App'}>
            <OnOff onClickHandler={onClickHandler} on={on}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledAccordion titleValue={"Меню"} />
            <UncontrolledAccordion titleValue={"Друзья"} />
            {/*<UncontrolledRating />*/}
            <Accordion titleValue={"Меню"} collapsed={accordionCollapsed} setAccordionCollapsed={()=>{setAccordionCollapsed(!accordionCollapsed)}} items={items}/>
            <Accordion titleValue={"Друзья"} collapsed={accordionCollapsed} setAccordionCollapsed={()=>{setAccordionCollapsed(!accordionCollapsed)}} items={items}/>
            <Rating setRatingValue={setRatingValue} value={ratingValue}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
