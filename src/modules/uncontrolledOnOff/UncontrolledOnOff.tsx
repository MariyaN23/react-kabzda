import React, {useState} from 'react';

type OnOffPropsType = {
    //on: boolean
    onChange: (on: boolean)=> void
}

export const UncontrolledOnOff = (props: OnOffPropsType) => {

    let [on, setOn] = useState(false)
    const onClickHandler = (on: boolean) => {
        setOn(on)
    }

    const onStyle = {
        width: '150px',
        height: '100px',
        border: '1px solid black',
        fontSize: '90px',
        display: 'inline-block',
        padding: '10px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '150px',
        height: '100px',
        border: '1px solid black',
        fontSize: '90px',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '10px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '70px',
        height: '70px',
        border: '1px solid black',
        borderRadius: '50px',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = (clicked: boolean) => {
        onClickHandler(clicked)
        props.onChange(clicked)
    }

    return <div>
        <div style={onStyle} onClick={()=>onClicked(true)}>On
        </div>
        <div style={offStyle} onClick={()=>onClicked(false)}>Off
        </div>
        <div style={indicatorStyle}></div>
    </div>
}

