import Room from "./Room.jsx";

export default function House({ name, price }) {
    return (
        <div className="card  border-black">
            <img src="src/assets/react.svg" alt="" className="card-img-top w-25"/>
            <div className="card-body border">
                <h2 className="card-title text-center">{name}</h2>
                <div className="accordion" id="accordionExample">
                    <Room name="bedroom" description="this is a pretty cool room" id={1}/>
                    <Room name="bathroom" description="this is also a cool room" id={2}/>
                </div>
                <h2 className="my-4 text-start">Price: ${price}</h2>
            </div>
        </div>
    )
}