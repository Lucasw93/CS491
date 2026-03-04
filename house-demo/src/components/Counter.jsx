import {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return <>
        <h1>The count is: {count}</h1>
        <div className="btn-group" role="group" aria-label="Basic example">
            <button
                onClick={() => setCount(count - 1)}
                type="button" className="btn btn-outline-primary">Minus</button>
            <button
                onClick={() => setCount(count + 1)}
                type="button"
                className="btn btn-outline-primary">Add</button>
        </div>
    </>
}

export default Counter;