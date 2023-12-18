import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffect'
}

export const Example1 = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('Example1')

    useEffect(() => {
        console.log('UseEffect every render')
        document.title = String(counter)
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementById()
        //document.title = 'User'
    })

    useEffect(() => {
        console.log('UseEffect first render and only when counter changing')
        document.title = String(counter)
    }, [counter])

    useEffect(() => {
        console.log('UseEffect only first render')
        document.title = String(counter)
    }, [])

    return <>
        Hello, {fake} {counter}
        <button onClick={() => {
            setFake(fake + 1)
        }}>+
        </button>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
    </>
}

export const SetIntervalExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('Set interval Example')

    /*    useEffect(()=> {
            setTimeout(()=>{
                console.log('setTimeout')
                document.title = String(counter)
            }, 1000)
        }, [counter])*/

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
        return ()=> {
            clearInterval(interval)
        }
    }, [])


    return <>
        Hello, fake - {fake} counter - {counter}
        {/*<button onClick={()=>{setFake(fake + 1)}}>+</button>
        <button onClick={()=>{setCounter(counter + 1)}}>+</button>*/}
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('Component rendered')

    useEffect(() => {
        console.log('Effect occurred' + counter)
        return () => {
            console.log('reset effect' + counter)
        }
    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return <>
        Hello, counter - {counter}
        <button onClick={increase}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)

    useEffect(() => {
        console.log('Effect occurred ' + text)
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(state => state + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
            console.log('reset effect ' + text)
        }
    }, [])
    return <>
        Hello, text - {text}
    </>
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)

    useEffect(() => {
        const timeout = setTimeout(()=>{
            console.log("TIMEOUT EXPIRED")
            setText('3 seconds passed')
        }, 3000)
        return () => {
            clearTimeout(timeout)
        }
    }, [])
    return <>
        Hello, text - {text}
    </>
}