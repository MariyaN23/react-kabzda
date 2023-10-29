import React, {useMemo, useState} from 'react';

export default {
    title: 'UseMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1


    resultA = useMemo(()=> {
        let tempResultA = 1
        for (let i=1; i<=a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake ++
                Math.random()
            }
            tempResultA = tempResultA*i
        }
        return tempResultA
    }, [a])



    for (let i=1; i<=b; i++) {
            resultB = resultB*i
    }

    return (
        <div>
            <input value={a} onChange={(event)=>{setA(Number(event.currentTarget.value))}}/>
            <input value={b} onChange={(event)=>{setB(+event.currentTarget.value)}}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </div>
    );
};

const SecretUsers = (props: { users: Array<string> }) => {
    console.log('Secret user')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }
    </div>
}

const Users = React.memo(SecretUsers)

export const HelpsToReactMemo = () => {
    console.log('Helps to react memo')
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Oleg'])
    const [counter, setCounter] = useState(0)

    const newArray = useMemo(()=> {
        const filteredArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return filteredArray
    }, [users])

    const addUser = ()=> {
        const newUser = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUser)
    }

    return <>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        <button onClick={addUser}>Add new user</button>
        {counter}
        <Users users={newArray}/>
    </>
}


