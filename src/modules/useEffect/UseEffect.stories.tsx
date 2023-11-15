import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffect'
}

export const Example1 = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('Example1')

    useEffect(()=> {
        console.log('UseEffect every render')
        document.title = String(counter)
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementById()
        //document.title = 'User'
    })

    useEffect(()=> {
        console.log('UseEffect first render and only when counter changing')
        document.title = String(counter)
    }, [counter])

    useEffect(()=> {
        console.log('UseEffect only first render')
        document.title = String(counter)
    }, [])

    return <>
        Hello,  {fake} {counter}
        <button onClick={()=>{setFake(fake + 1)}}>+</button>
        <button onClick={()=>{setCounter(counter + 1)}}>+</button>
    </>
}