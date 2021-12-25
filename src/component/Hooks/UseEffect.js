import React, {useEffect, useState} from 'react'
import './style.css';

const UseEffect = () => {
    const initialData = 15;
    const [myNum, setmyNum] = useState(initialData);
    console.log(myNum);
  
    useEffect(() => {
       document.title = `chats(${myNum})`;
        
        
    }, );


    return (
        <>
           <div className='center_div'>
               <p>{myNum}</p>
               <div class="button2" onClick={()=>setmyNum(myNum +1)}>
                   <span></span>
                   <span></span>
                   <span></span>
                   <span></span>
                   INCR
               </div>
             
               
               </div> 
        </>
    )
}

export default UseEffect

