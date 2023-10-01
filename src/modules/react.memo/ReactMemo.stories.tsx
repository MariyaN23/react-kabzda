import React, {useState} from 'react';

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const SecretUsers = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }
    </div>
}

const Users = React.memo(SecretUsers)

export const Example1 = () => {
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Oleg'])
    const [counter, setCounter] = useState(0)

    return <>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}