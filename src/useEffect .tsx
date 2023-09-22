import { useState ,useEffect } from 'react'
const Onclick =() =>{
    const [change,setChange] =useState<boolean>(false);
    useEffect (()=>{
        const handleClick=()=>{
            console.log('click');
        };
        const click = document.getElementById('clickButton');
         if (change) {
            click?.addEventListener('click',handleClick);

         }
         return ()=>{
            click?.removeEventListener('click', handleClick);
         }
    },[change])
    return (
       <div>
         <button onClick={() => setChange(!change)}>setChange</button>
      <button id="clickButton">Click here</button>
       </div>
    )
    }
    export default  Onclick;