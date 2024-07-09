import React, { useEffect, useRef } from "react";
import Demo from "./useMemo/counter";
function App() {
  let colorParagraph = useRef(null); // useRef => {current: null}
  let colors = ['red','blue','green','yellow','pink','orange'];
  useEffect(()=>{
    console.log("colorParagraph",colorParagraph);
  },[]);
  const handleColor = () => {
    const randomColor = Math.floor(Math.random() * colors.length);
    colorParagraph.current.style.color = colors[randomColor]
  }
  return (
    <div >
     <button onClick={()=> handleColor()}>Click Here</button>
     <h1 ref={colorParagraph}> Hello This is useRef </h1>
     
    </div>
  );
}

export default App;
