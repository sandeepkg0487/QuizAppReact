import React, { useContext } from 'react'
import { useMyContext } from './utils/Contextanswer'
type Props = {
    index:number
}

export const Buttonstatus:React.FunctionComponent<Props> = ({index}) => {
    const {i,setI,questiondb} = useMyContext();

    const statusButtonClickEvent = (index:number) => {
      setI(index-1);
    }

  return (
    <button key={index} type="button" className={`${questiondb[index-1]?.userAnswer!=null ? 'active ':''}statusButton`} onClick={()=>statusButtonClickEvent(index)}>
    {index}
  </button>
  )
}


