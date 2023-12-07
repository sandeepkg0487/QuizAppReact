import React, { useState } from 'react'
import { button } from './utils/shape'

export default function Button({children,className, setTabtriger,value ,set}:button) {
  const [active , setActive]=useState(false)
  const tabTriger =() => {
    setActive(true);
    setTabtriger(set);
  }
  return (
    <div>
      <button value={value} className={className} onClick={ tabTriger} >{children}</button>
    </div>
  )
}
