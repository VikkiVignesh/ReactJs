import React ,{useState} from "react";
function Clock()
{
    const [time,setTime]=useState(new Date().toString())
   function showtime()
   {
     //return (<h1>{new Date().toString()}</h1> );
     setTime(new Date().toString());
   }

   setInterval(showtime, 1000);

   return <>{time}</>
}

export default Clock;