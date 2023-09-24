import React, {ChangeEvent, useRef, useState} from 'react';

export default {
  title: 'input'
}

export const UncontrolledInput =()=> <input/>

export const TrackValueOfUncontrolledInput =()=> {
  const [value, setValue] = useState('')
  const onChange = (event: ChangeEvent<HTMLInputElement>)=>{
    const actualValue = event.currentTarget.value
    setValue(actualValue)}
  return (
      <>
        <input onChange={onChange}/>
        -- {value}
      </>
      )
}

export const GetValueOfUncontrolledInputbyButtonPress =()=> {
  const [value, setValue] = useState('')
  const onClick = ()=>{
    const el = document.getElementById('inputId') as HTMLInputElement
    setValue(el.value)}
  return (
      <>
        <input id={'inputId'}/>
        <button onClick={onClick}>save</button>
        -- actual value {value}
      </>
  )
}

export const GetValueOfUncontrolledInputbyButtonPress2 =()=> {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const save = ()=>{
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)}
  return (
      <>
        <input ref={inputRef}/>
        <button onClick={save}>save</button>
        -- actual value {value}
      </>
  )
}

export const ControlledInputWithFixedValue =()=> <input value={'it-kamasutra'}/>

export const ControlledInput = ()=> {
    const [value, setValue] = useState('')
    const onChangeHandler =(e: ChangeEvent<HTMLInputElement>)=> {
        setValue(e.currentTarget.value)
    }
    return (
        <input value={value} onChange={onChangeHandler}/>
    )
}

export const ControlledCheckbox =()=> {
    const [checked, setChecked] = useState(false)
    const onChangeHandler =(e: ChangeEvent<HTMLInputElement>)=> {
        setChecked(e.currentTarget.checked)
    }
    return (
        <input type={'checkbox'} checked={checked} onChange={onChangeHandler}/>
    )
}
export const ControlledSelected =()=> {
    const [select, setSelect] = useState<string | undefined>(undefined)
    const onChangeHandler =(e: ChangeEvent<HTMLSelectElement>)=> {
        setSelect(e.currentTarget.value)
    }
    return (
        <select value={select} onChange={onChangeHandler}>
            <option>none</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Moskow</option>
            <option value={'3'}>Kiev</option>
        </select>
    )
}

