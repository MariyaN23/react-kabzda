import React, {useState} from 'react';

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
    const onclickHandler = (id:any)=>{
        setCollapsed(!collapsed)
        props.onChange(id)
    }
    return (
        <div>
            {!collapsed && <div onClick={onclickHandler}>{props.items.filter(el=> el.value === props.value)[0].title}</div>}
            {collapsed && props.items.map(i => <div onClick={()=>onclickHandler(i.value)}>{i.title}</div>)}
        </div>
    );
};