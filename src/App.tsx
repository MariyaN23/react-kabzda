import React from 'react';
import './App.css';
import Accordion from "./modules/Accordion/Accordion";
import {Rating as R} from "./modules/Rating/Rating";

function App() {
    console.log('App rendering')
    return (
        <div className="App">
            <AppTitle />
            <R />
            <Accordion titleValue={"Меню"} collapsed={false}/>
            <Accordion titleValue={"Друзья"} collapsed={true}/>
            <R />
        </div>
    );
}

function AppTitle() {
    console.log('AppTitle rendering')
    return (
        <>This is APP component</>
    )
}

export default App;
