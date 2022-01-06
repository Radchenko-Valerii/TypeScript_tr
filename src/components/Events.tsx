import React, {FC, ReactEventHandler, useState} from 'react'

export const Events: FC = () => {
  const [value, setValue] = useState<string>('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) =>{
    alert(value)
  }

  return (
    <div style={{paddingTop: "20px", paddingBottom: "30px"}}>
      <input value={value} onChange={changeHandler} type="text" />
      <button onClick={clickHandler}>alert!</button>
    </div>
  )
}
