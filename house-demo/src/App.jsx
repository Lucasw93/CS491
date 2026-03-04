import {useState} from 'react'
import House from "./components/House.jsx";
import Counter from "./components/Counter.jsx";

function App() {
    const [price, setPrice] = useState(10)

    return <>
        <div className="container ">
            <House name="Paradise" price={price}/>
        </div>

        <div className="container border border-2 border-black rounded m-auto my-5 p-5">
            <Counter />
        </div>

    </>
}

export default App
