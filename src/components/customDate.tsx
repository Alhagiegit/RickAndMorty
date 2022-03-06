import React from "react";


const getDate=()=>{
    const [time, setTime]=React.useState("")
    const getCurrentTime=()=>{
      setTime(new Date().toTimeString());
     }
   return(
       <>
          <div>{time}</div>
         <button onClick={getCurrentTime}>get Time</button>
       </>

   )
}

export default getDate;