import { useState } from "react";

function Counter(){
    const [x, setX]=useState(0)
    const [y, setY]=useState(0)
    return(
        <>

            Count X :{x} <br/>
            <button onClick={() => setX(x+1)}>Increment</button>
            <button onClick={() => setX(x-1)}>Decrement</button>
            <br/>
            Count Y :{y} <br/>
            <button onClick={() => setY(y+1)}>Increment</button>
            <button onClick={() => setY(y-1)}>Decrement</button>
        </>
    )
}

export default Counter;