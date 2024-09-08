import { useState } from "react";
function ArrayPassInStack(){
    const [todo, setTodos] = useState(['todoone', 'todo2', 'todo3'])
    return(
        <ul>
            {todo.map((todo) => <li>{todo}</li>)}
            {/* <button onClick={() => setTodos([1,2,3,4])}>Click</button>    this is replace the ArrayPassInStack */}

            <button onClick={() => setTodos([...todo, 'another one added'])}>Click</button>

        </ul>
    )
}
export default ArrayPassInStack