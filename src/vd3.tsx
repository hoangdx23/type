import { useRef, useState } from "react";

const Vd3 =()=>{
    const [countState,setCountState]= useState<number>(0);
    const refCount= useRef<number>(0);
   const handle = ()=>{
    refCount.current+=1;
    setCountState((countState)=> countState+1);
    console.log('countState',countState);
    console.log('refCount',refCount.current);
   }
    return(
        <div>
            <button type="button" onClick={handle}>count</button>
        </div>
    )
}
export default Vd3;