import {useState} from 'react'

import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";
import InputGroup from "react-bootstrap/InputGroup";

const GroceryList = ({ initItems }) => {
    const [items, setItems] = useState(initItems);

    const addItem = () => {
        const html = document.getElementById("newItemID");
        if (html.value) {
            setItems([...items, html.value]);
            html.value = "";
        }
    }

    const delItem = index => {
        items.splice(index, 1);
        setItems([...items]);
    }

    return <>
        <InputGroup className="w-50 m-5">
            <Form.Control type="text" id="newItemID" placeholder="New Item"/>
            <InputGroup.Text className="btn  btn-primary" onClick={addItem}>Add</InputGroup.Text>
        </InputGroup>
        {items.map(((itm, idx) =>
                <InputGroup className="w-50 m-5 border rounded">
                    <Form.Label className="mx-2" column="lg">{itm}</Form.Label>
                    <CloseButton className="m-auto p-2" onClick={() => delItem(idx)}/>
                </InputGroup>
        ))}
    </>
}

export default GroceryList;