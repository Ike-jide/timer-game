import { useState,useRef } from "react"
import ResultModal from "./ResultModal"

export default function TimerChallenge(props){
    const timer = useRef()
    const dialog = useRef()
   const [timeRemaining,setTimeRemaining] = useState(props.targetTime * 1000)
   const timerIsActive = timeRemaining > 0 && timeRemaining < props.targetTime * 1000
   if(timeRemaining <=  0){
    clearInterval(timer.current)
    dialog.current.open()
   }
   function handleReset(){
    setTimeRemaining(props.targetTime * 1000)
   }
    function handleStart(){
    
     timer.current =  setInterval(()=>{
       setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
        },10)
    }
    function handleStop(){
        clearInterval (timer.current)
        dialog.current.open()
    }
return(
    <>
     <ResultModal targetTime={props.targetTime} ref={dialog} remainingTime={timeRemaining} onReset={handleReset}/>
    <section className="challenge">
        <h2>{props.title}</h2>
        
        <p className="challenge-time">
            {props.targetTime} second{props.targetTime > 1 ? 's' :''}
        </p>
        <p>
            <button onClick={timerIsActive ? handleStop : handleStart}> 
                {timerIsActive ? 'stop':'start'} challenge
            </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
      {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
    </section>
    </>
)
}