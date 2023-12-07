import React from 'react'
import { datashape } from './utils/shape';


export default function Input({data,setQuestionadd,name,value}:datashape|any) {

 const inputevent=( type :string,event:React.ChangeEvent<HTMLInputElement>) => {
      if(type==='question')
        setQuestionadd ((prevdata:any)=>({...prevdata,question:event.target.value} )) //{...questionadd , question:event.target.value}
      else if(type==='option'){
        setQuestionadd(
          (prevdata:any)=>({...prevdata,
            option:{ ...prevdata.option,
              [event.target.name]:event.target.value}
          })
        )
        
        

      }
      else if (type==='answer')
        setQuestionadd ((prevdata:any)=>({...prevdata,answer:event.target.value} ))
    }
    
    
    
  return (
    <div>
      <input name={name} value={value} className='inputGeneral' type="text" onChange={(Event)=>inputevent(data,Event)} />
     
    </div>
  )
}
