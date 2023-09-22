import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import ChildCpn from './ChildCpn'
import Onclick from "./useEffect ";
import Vd3 from "./vd3";
// import Use from "./useState"; 
import Ref from "./useref";
import Memo from "./useMemo";
// import Board from "./board";
function App() {
  const [count, setCount] = useState<number>(0)
     const count3 =()=>{
      setCount((count) => count + 1)
      setCount((count) => count + 1)
      setCount((count) => count + 1)
     }
  return (
    <>
    <div className="flex justify-center items-center h-[100vh]">
    </div>
      <BrowserRouter>
      <Routes>
        <Route path="/useref" element={<Ref/>}>
        </Route>
      </Routes>
      </BrowserRouter>
    <div>
      <Memo></Memo>
      <Vd3></Vd3>
      <Onclick></Onclick>
    </div>
    <div> 
        <ChildCpn prop1="xin chao" prop2={true} /></div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
         count +1
        </button>
        <button onClick={count3}>count +3</button>
        {count}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
export default App
