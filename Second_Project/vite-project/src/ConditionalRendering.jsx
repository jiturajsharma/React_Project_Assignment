import { useState } from "react"

function ConditionalRendering(){
    const [x, SetX]=useState(0)
    return(
        <>
            Count X: {x} is {( x % 2 == 0 )? 'Even'  :  'Odd'} <br />
            <button onClick={() =>SetX(x+1)}>INCREMENT</button>    
            <button onClick={() =>SetX(x-1)}>DECREMENT</button>   <br />
            <EditingSomething />
        </>
    )
}

function EditingSomething(){
    const [isEditing, setisEditing] = useState(false)
    return(
        <>
            {
                (isEditing)? <input/> : <p>Some todo</p>
            }
            <br />
            <button onClick={() => setisEditing(!isEditing)}>Click here</button>
        </>
    )
}

export default ConditionalRendering