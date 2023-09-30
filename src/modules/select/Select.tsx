import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'

type ItemsType = {
    value: any
    title: string
}

type SelectPropsType = {
    value: any
    onChange: (value:any) => void
    items: ItemsType[]
}

export const Select = (props: SelectPropsType) => {
    const [collapsed,setCollapsed] = useState(false)
    const [hoveredItemElement, setHoveredItemElement] = useState(props.value)

    const hoveredItem = props.items.find(el=> el.value === hoveredItemElement)

    const toggleItems = ()=>{
        setCollapsed(!collapsed)
    }
    const onclickHandler = (id:any)=>{
        toggleItems()
        props.onChange(id)
    }
    useEffect(()=>{
        setHoveredItemElement(props.value)
    }, [props.value])

    const selectedItem = props.items.find(el=> el.value === props.value)
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>)=> {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (hoveredItemElement === props.items[i].value) {
                    const newElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (newElement) {
                        props.onChange(newElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
            if (e.key === 'Escape' || e.key === 'Enter') {
                setCollapsed(!collapsed)
            }
/*            if (hoveredItemElement === props.items[props.items.length-1].value) {
                setHoveredItemElement(props.items[0].value)
                props.onChange(props.items[0].value)
                break
            }*/
        }

    return (
        <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {collapsed &&
                <div className={s.items}>
                    {props.items.map(i => <div
                        className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                        onMouseEnter={()=>{setHoveredItemElement(i.value)}}
                        key={i.value}
                        onClick={()=>onclickHandler(i.value)}>{i.title}</div>)}
                </div>}
        </div>
    );
};