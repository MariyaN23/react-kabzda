import {useEffect, useState} from 'react';
import {api} from './api';
import {useDispatch, useSelector} from 'react-redux';
import {deleteItemTC, loadItemsTC} from './redux';

const ItemsPage = () => {
    /*const [items, setItems] = useState([])
    const [status, setStatus] = useState('idle')
    const [error, setError] = useState(null)*/

    const items = useSelector(s => s.items)
    const status = useSelector(s => s.status)
    const error = useSelector(s => s.error)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadItemsTC())
    }, [])

    /*useEffect(() => {
        setStatus('loading')
        setError(null)
        api.loadItems().then((res) => {
            setItems(res.data)
        }).catch(err => {
            setError(err)
        }).finally(() => {
            setStatus('idle')
        })
    }, [])

    const deleteItem = (id) => {
        setStatus('loading')
        setError(null)
        api.deleteItem(id).then((res) => {
            setItems(items.filter(i => i.id !== id))
        }).catch(err => {
            setError(err)
        }).finally(() => {
            setStatus('idle')
        })
    }*/

    return <div>
        {(status === 'loading') && <span>Loading....</span>}
        {!!error && <span>{error.toString()}</span>}
        <ul>{
            items
                .map(i => {
                    return <Item item={i} key={i.id}/>
                })}
        </ul>
    </div>
}

const Item = (props) => {
    const dispatch = useDispatch()
    const deleteItem = () => {
        dispatch(deleteItemTC(props.item.id))
    }
    return (
        <li>
            {props.item.title}
            <button onClick={deleteItem}></button>
        </li>
    )
}
