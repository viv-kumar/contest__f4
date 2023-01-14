import React from "react";
import "./Counter.css"
import Alert from "../Alert/Alert";
import SetZero from "../SetZero/SetZero";

function Counter() {
    const[state,setState]=React.useState(0);
    const [show,setshow]=React.useState(true)
    const[zero,setZero]=React.useState(false);
    // let val=true;
     function increase(){
        if(state>=0 && state<10){
            setshow(true)
            setState((state) => state + 1);
        }

        if(state>=10){
            setZero(true);
            setState(state=>state)
        }
        
     }
     function decrease(){
        
            if(state<=0){
                setState(state=>state);
                setshow(false)
                setZero(false)
            }
            else{
                
                setState(state=>state-1)
                setZero(false)
            }
    }
    
  return (
    <div id="counter">
      <h1>Counter Using React</h1>
      <h5>Your Current Count is: {state}</h5>
      {show ? <h2></h2> : <Alert />}
      <hr></hr>
      <br></br>

      <button id="btn1" onClick={decrease}>
        Decreament
      </button>
      <button onClick={increase}>Increament</button>
      <br></br>
      <br></br>
      {zero?<div onClick={()=>{
        if(state==10){
            setState(0)
            setZero(false)
        }
              }}><SetZero/></div>:<h1></h1>}
    </div>
  );
}

export default Counter;
