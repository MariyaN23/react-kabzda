import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'UseState'
}

function generateData() {
    // difficult counting
    console.log('generateData')
    return 45658416515165
}

export const Example1 = () => {
    console.log('Example1')

    //const initialValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)

    /*const changer =(state: number)=> {
        return state + 1
    }*/

    return <>
        <button onClick={()=>{setCounter(state => state + 1)}}>+</button>
        {counter}
    </>
}