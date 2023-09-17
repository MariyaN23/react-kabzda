import React from 'react';

type OnOffPropsType = {
    on: boolean
    onClickHandler: (on: boolean)=>void
}

export const OnOff = (props: OnOffPropsType) => {
    const onStyle = {
        width: '150px',
        height: '100px',
        border: '1px solid black',
        fontSize: '90px',
        display: 'inline-block',
        padding: '10px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '150px',
        height: '100px',
        border: '1px solid black',
        fontSize: '90px',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '10px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '70px',
        height: '70px',
        border: '1px solid black',
        borderRadius: '50px',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: props.on ? 'green' : 'red'
    }
    return <div>
        <div style={onStyle} onClick={() => {
            props.onClickHandler(true)
        }}>On
        </div>
        <div style={offStyle} onClick={() => {
            props.onClickHandler(false)
        }}>Off
        </div>
        <div style={indicatorStyle}></div>
    </div>
}

