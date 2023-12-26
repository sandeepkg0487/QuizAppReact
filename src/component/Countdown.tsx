import React, { useEffect, useState } from 'react'


const Countdown = () => {
    const [timer, setTimer] = useState<number>(5); 
  
    useEffect(() => {
        const countdown = setInterval(() => {
          setTimer((prevTimer:number):number|any => {
            if (prevTimer === 0) {
              clearInterval(countdown);
             
              // Handle time's up logic here
            } else {
              return prevTimer - 1;
            }
          });
        }, 1000);
    
        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(countdown);
      }, []); 
  return (
    <div>
      <h3>00:{timer}</h3>
    </div>
  )
}

export default Countdown
