import React from 'react';
import './App.css';
import Accordion from "./modules/accordion/Accordion";
import {Rating, Rating as R} from './modules/Rating/Rating';
import {OnOff} from './modules/onOff/OnOff';
import UncontrolledAccordion from './modules/uncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './modules/UncontrolledRating/UncontrolledRating';

function App() {
    console.log('App rendering')
    return (
        <div className={'App'}>
            <OnOff />
            <OnOff />
            <OnOff />
            <UncontrolledAccordion titleValue={"Меню"} />
            <UncontrolledAccordion titleValue={"Друзья"} />
            <UncontrolledRating />
            <Accordion titleValue={"Меню"} collapsed={true}/>
            <Accordion titleValue={"Друзья"} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

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
