import React, {FC, ReactEventHandler, useRef, useState} from 'react'

export const Events: FC = () => {
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) =>{
    alert(`uncontroled: ${inputRef.current?.value || "-empty-"}, controled: ${value || "-empty-"}`)
  }

  return (
    <div style={{paddingTop: "20px", paddingBottom: "30px"}}>
      <input ref={inputRef} type="text" placeholder="uncontroled input"/>
      <input value={value} onChange={changeHandler} type="text" placeholder="controled input" />
      <button onClick={clickHandler}>alert!</button>
    </div>
  )
}
