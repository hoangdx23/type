
import  { useState, useEffect, useRef } from 'react';

function Ref() {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const inputRef = useRef<HTMLInputElement|null>(null);

  const tBackgroundColor = () => {
    setBackgroundColor((prevColor) => (prevColor === 'white' ? 'red' : 'white'));
  };

  useEffect(() => {
    if(inputRef.current){
        inputRef.current.focus();
    }
  }, []);
  return (
    <div>
      <button 
        style={{ backgroundColor }}
        onClick={tBackgroundColor}
      >
        Change Ref
      </button>
      <input ref={inputRef} type="text" />
    </div>
  );
}
export default Ref;
 
