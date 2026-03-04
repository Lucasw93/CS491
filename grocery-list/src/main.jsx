import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import GroceryList from './components/GroceryList.jsx'
import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Container className="border m-auto ">
            <GroceryList initItems={["bacon", "broccoli", "carrots"]}/>
        </Container>
    </StrictMode>,
)
