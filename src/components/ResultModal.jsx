import { forwardRef, useImperativeHandle,useRef} from "react"

const ResultModal= forwardRef( function ResultModal(props,ref){
    const dialog = useRef()
    const userLost = props.remainingTime <= 0;
    const formattedTimeRemaining = (props.remainingTime/1000).toFixed(2)
    const score = Math.round((1- props.remainingTime / (props.targetTime * 1000)) * 100) 
    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal()
            }
        }
    })
    return(
        <dialog className="result-modal" ref={dialog}  onClose={props.onReset}>
          {userLost &&  <h2>You Lost</h2>}
          {!userLost &&  <h2>Your score {score}</h2>}
            <p>
                The Target time was <strong>{props.targetTime} seconds.</strong>
            </p>
            <p>
                You stopped the timer with <strong>{formattedTimeRemaining } seconds left.</strong>
            </p>
            <form method="dialog" onSubmit={props.onReset }>
                <button>Close</button>
            </form>
        </dialog>
    )
})
export default ResultModal